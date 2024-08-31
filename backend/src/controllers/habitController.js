// const Habit = require('../models/Habit');

// exports.createHabit = async (req, res) => {
//   try {
//     const habit = new Habit(req.body);
//     await habit.save();
//     res.status(201).json(habit);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// exports.getHabits = async (req, res) => {
//   try {
//     const habits = await Habit.find();
//     res.json(habits);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// exports.updateHabit = async (req, res) => {
//   try {
//     const habit = await Habit.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     res.json(habit);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// exports.deleteHabit = async (req, res) => {
//   try {
//     await Habit.findByIdAndDelete(req.params.id);
//     res.json({ message: 'Habit deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };



const Habit = require('../models/Habit');

exports.createHabit = async (req, res) => {
  try {
    const habit = new Habit(req.body);
    await habit.save();
    res.status(201).json(habit);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getHabits = async (req, res) => {
  try {
    const habits = await Habit.find({ isDeleted: false });
    res.json(habits);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateHabit = async (req, res) => {
  try {
    const habit = await Habit.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(habit);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteHabit = async (req, res) => {
  try {
    const habit = await Habit.findByIdAndUpdate(req.params.id, { isDeleted: true }, { new: true });
    res.json({ message: 'Habit deleted successfully', habit });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.completeHabit = async (req, res) => {
  try {
    const habit = await Habit.findByIdAndUpdate(
      req.params.id,
      { 
        $set: { progress: 100 },
        $push: { completions: { date: new Date() } }
      },
      { new: true }
    );
    res.json(habit);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.incompleteHabit = async (req, res) => {
  try {
    const habit = await Habit.findByIdAndUpdate(
      req.params.id,
      { 
        $set: { progress: 0 },
        $pull: { completions: { date: { $gte: new Date().setHours(0, 0, 0, 0) } } }
      },
      { new: true }
    );
    res.json(habit);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};