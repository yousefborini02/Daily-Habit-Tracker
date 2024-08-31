// // frontend/src/components/HabitList.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const HabitList = () => {
//   const [habits, setHabits] = useState([]);

//   useEffect(() => {
//     fetchHabits();
//   }, []);

//   const fetchHabits = async () => {
//     const response = await axios.get('http://localhost:5000/api/habits');
//     setHabits(response.data);
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-bold mb-4">My Habits</h2>
//       <ul className="space-y-4">
//         {habits.map((habit) => (
//           <li key={habit._id} className="bg-white shadow rounded-lg p-4">
//             <h3 className="text-xl font-semibold">{habit.name}</h3>
//             <p className="text-gray-600">{habit.description}</p>
//             <div className="mt-2">
//               <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
//                 {habit.category}
//               </span>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default HabitList;





// // frontend/src/components/HabitList.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const HabitList = () => {
//   const [habits, setHabits] = useState([]);
//   const [editingHabit, setEditingHabit] = useState(null);

//   useEffect(() => {
//     fetchHabits();
//   }, []);

//   const fetchHabits = async () => {
//     const response = await axios.get('http://localhost:5000/api/habits');
//     setHabits(response.data);
//   };

//   const handleEdit = (habit) => {
//     setEditingHabit(habit);
//   };

//   const handleUpdate = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.put(`http://localhost:5000/api/habits/${editingHabit._id}`, editingHabit);
//       setEditingHabit(null);
//       fetchHabits();
//     } catch (error) {
//       console.error('Error updating habit:', error);
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/api/habits/${id}`);
//       fetchHabits();
//     } catch (error) {
//       console.error('Error deleting habit:', error);
//     }
//   };

//   const handleComplete = async (id, isComplete) => {
//     try {
//       const endpoint = isComplete ? 'complete' : 'incomplete';
//       await axios.put(`http://localhost:5000/api/habits/${id}/${endpoint}`);
//       fetchHabits();
//     } catch (error) {
//       console.error('Error updating habit completion:', error);
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-bold mb-4">My Habits</h2>
//       <ul className="space-y-4">
//         {habits.map((habit) => (
//           <li key={habit._id} className="bg-white shadow rounded-lg p-4">
//             {editingHabit && editingHabit._id === habit._id ? (
//               <form onSubmit={handleUpdate} className="space-y-2">
//                 <input
//                   type="text"
//                   value={editingHabit.name}
//                   onChange={(e) => setEditingHabit({ ...editingHabit, name: e.target.value })}
//                   className="w-full p-2 border rounded"
//                 />
//                 <textarea
//                   value={editingHabit.description}
//                   onChange={(e) => setEditingHabit({ ...editingHabit, description: e.target.value })}
//                   className="w-full p-2 border rounded"
//                 />
//                 <input
//                   type="text"
//                   value={editingHabit.category}
//                   onChange={(e) => setEditingHabit({ ...editingHabit, category: e.target.value })}
//                   className="w-full p-2 border rounded"
//                 />
//                 <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
//                 <button onClick={() => setEditingHabit(null)} className="bg-gray-500 text-white px-4 py-2 rounded ml-2">Cancel</button>
//               </form>
//             ) : (
//               <>
//                 <h3 className="text-xl font-semibold">{habit.name}</h3>
//                 <p className="text-gray-600">{habit.description}</p>
//                 <div className="mt-2">
//                   <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
//                     {habit.category}
//                   </span>
//                 </div>
//                 <div className="mt-4 flex items-center">
//                   <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
//                     <div className="bg-blue-600 h-2.5 rounded-full" style={{width: `${habit.progress}%`}}></div>
//                   </div>
//                   <span className="text-sm font-medium text-gray-500">{habit.progress}%</span>
//                 </div>
//                 <div className="mt-4 space-x-2">
//                   <button onClick={() => handleEdit(habit)} className="bg-yellow-500 text-white px-4 py-2 rounded">Edit</button>
//                   <button onClick={() => handleDelete(habit._id)} className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
//                   <button onClick={() => handleComplete(habit._id, true)} className="bg-green-500 text-white px-4 py-2 rounded">Complete</button>
//                   <button onClick={() => handleComplete(habit._id, false)} className="bg-orange-500 text-white px-4 py-2 rounded">Incomplete</button>
//                 </div>
//               </>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default HabitList;


// frontend/src/components/HabitList.js
import React, { useState } from 'react';
import axios from 'axios';

const HabitList = ({ habits, setHabits }) => {
  const [editingHabit, setEditingHabit] = useState(null);

  const handleEdit = (habit) => {
    setEditingHabit(habit);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:5000/api/habits/${editingHabit._id}`, editingHabit);
      setEditingHabit(null);
      setHabits(habits.map(habit => habit._id === response.data._id ? response.data : habit));
    } catch (error) {
      console.error('Error updating habit:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/habits/${id}`);
      setHabits(habits.filter(habit => habit._id !== id));
    } catch (error) {
      console.error('Error deleting habit:', error);
    }
  };

  const handleComplete = async (id, isComplete) => {
    try {
      const endpoint = isComplete ? 'complete' : 'incomplete';
      const response = await axios.put(`http://localhost:5000/api/habits/${id}/${endpoint}`);
      setHabits(habits.map(habit => habit._id === id ? response.data : habit));
    } catch (error) {
      console.error('Error updating habit completion:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">My Habits</h2>
      <ul className="space-y-4">
        {habits.map((habit) => (
          <li key={habit._id} className="bg-white shadow rounded-lg p-4">
            {editingHabit && editingHabit._id === habit._id ? (
              <form onSubmit={handleUpdate} className="space-y-2">
                <input
                  type="text"
                  value={editingHabit.name}
                  onChange={(e) => setEditingHabit({ ...editingHabit, name: e.target.value })}
                  className="w-full p-2 border rounded"
                />
                <textarea
                  value={editingHabit.description}
                  onChange={(e) => setEditingHabit({ ...editingHabit, description: e.target.value })}
                  className="w-full p-2 border rounded"
                />
                <input
                  type="text"
                  value={editingHabit.category}
                  onChange={(e) => setEditingHabit({ ...editingHabit, category: e.target.value })}
                  className="w-full p-2 border rounded"
                />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
                <button onClick={() => setEditingHabit(null)} className="bg-gray-500 text-white px-4 py-2 rounded ml-2">Cancel</button>
              </form>
            ) : (
              <>
                <h3 className="text-xl font-semibold">{habit.name}</h3>
                <p className="text-gray-600">{habit.description}</p>
                <div className="mt-2">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
                    {habit.category}
                  </span>
                </div>
                <div className="mt-4 flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{width: `${habit.progress}%`}}></div>
                  </div>
                  <span className="text-sm font-medium text-gray-500">{habit.progress}%</span>
                </div>
                <div className="mt-4 space-x-2">
                  <button onClick={() => handleEdit(habit)} className="bg-yellow-500 text-white px-4 py-2 rounded">Edit</button>
                  <button onClick={() => handleDelete(habit._id)} className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
                  <button onClick={() => handleComplete(habit._id, true)} className="bg-green-500 text-white px-4 py-2 rounded">Complete</button>
                  <button onClick={() => handleComplete(habit._id, false)} className="bg-orange-500 text-white px-4 py-2 rounded">Incomplete</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HabitList;