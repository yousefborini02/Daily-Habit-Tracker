// // frontend/src/components/AddHabitForm.js
// import React, { useState } from 'react';
// import axios from 'axios';

// const AddHabitForm = ({ onHabitAdded }) => {
//   const [habit, setHabit] = useState({ name: '', description: '', category: '' });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:5000/api/habits', habit);
//       onHabitAdded();
//       setHabit({ name: '', description: '', category: '' });
//     } catch (error) {
//       console.error('Error adding habit:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
//       <div className="mb-4">
//         <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
//           Habit Name
//         </label>
//         <input
//           type="text"
//           id="name"
//           value={habit.name}
//           onChange={(e) => setHabit({ ...habit, name: e.target.value })}
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           required
//         />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
//           Description
//         </label>
//         <textarea
//           id="description"
//           value={habit.description}
//           onChange={(e) => setHabit({ ...habit, description: e.target.value })}
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//         />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="category" className="block text-gray-700 font-bold mb-2">
//           Category
//         </label>
//         <input
//           type="text"
//           id="category"
//           value={habit.category}
//           onChange={(e) => setHabit({ ...habit, category: e.target.value })}
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//         />
//       </div>
//       <button
//         type="submit"
//         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//       >
//         Add Habit
//       </button>
//     </form>
//   );
// };

// export default AddHabitForm;




// frontend/src/components/AddHabitForm.js
import React, { useState } from 'react';
import axios from 'axios';

const AddHabitForm = ({ onHabitAdded }) => {
  const [habit, setHabit] = useState({ name: '', description: '', category: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/habits', habit);
      setHabit({ name: '', description: '', category: '' });
      if (typeof onHabitAdded === 'function') {
        onHabitAdded(response.data);
      }
    } catch (error) {
      console.error('Error adding habit:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
          Habit Name
        </label>
        <input
          type="text"
          id="name"
          value={habit.name}
          onChange={(e) => setHabit({ ...habit, name: e.target.value })}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
          Description
        </label>
        <textarea
          id="description"
          value={habit.description}
          onChange={(e) => setHabit({ ...habit, description: e.target.value })}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="category" className="block text-gray-700 font-bold mb-2">
          Category
        </label>
        <input
          type="text"
          id="category"
          value={habit.category}
          onChange={(e) => setHabit({ ...habit, category: e.target.value })}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Add Habit
      </button>
    </form>
  );
};

export default AddHabitForm;