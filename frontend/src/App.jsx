// // frontend/src/App.js
// import React from 'react';
// import HabitList from './components/HabitList';
// import AddHabitForm from './components/AddHabitForm';

// function App() {
//   return (
//     <div className="App">
//       <header className="bg-blue-500 text-white text-center py-4">
//         <h1 className="text-3xl font-bold">Daily Habit Tracker</h1>
//       </header>
//       <main className="container mx-auto p-4">
//         <AddHabitForm />
//         <HabitList />
//       </main>
//     </div>
//   );
// }

// export default App;



// // frontend/src/App.js
// import React, { useState, useEffect } from 'react';
// import AddHabitForm from './components/AddHabitForm';
// import HabitList from './components/HabitList';
// import axios from 'axios';

// function App() {
//   const [habits, setHabits] = useState([]);

//   useEffect(() => {
//     fetchHabits();
//   }, []);

//   const fetchHabits = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/habits');
//       setHabits(response.data);
//     } catch (error) {
//       console.error('Error fetching habits:', error);
//     }
//   };

//   const handleHabitAdded = (newHabit) => {
//     setHabits([...habits, newHabit]);
//   };

//   return (
//     <div className="App">
//       <header className="bg-blue-500 text-white text-center py-4">
//         <h1 className="text-3xl font-bold">Daily Habit Tracker</h1>
//       </header>
//       <main className="container mx-auto p-4">
//         <AddHabitForm onHabitAdded={handleHabitAdded} />
//         <HabitList habits={habits} setHabits={setHabits} />
//       </main>
//     </div>
//   );
// }

// export default App;


import React, { useState, useEffect } from 'react';
import AddHabitForm from './components/AddHabitForm';
import HabitList from './components/HabitList';
import SearchBar from './components/SearchBar';
import HabitFilters from './components/HabitFilters';
import axios from 'axios';

function App() {
  const [habits, setHabits] = useState([]);
  const [filteredHabits, setFilteredHabits] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');

  useEffect(() => {
    fetchHabits();
  }, []);

  useEffect(() => {
    filterHabits();
  }, [habits, searchTerm, categoryFilter]);

  const fetchHabits = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/habits');
      setHabits(response.data);
    } catch (error) {
      console.error('Error fetching habits:', error);
    }
  };

  const handleHabitAdded = (newHabit) => {
    setHabits([...habits, newHabit]);
  };

  const filterHabits = () => {
    let result = habits;

    if (searchTerm) {
      result = result.filter(habit => 
        habit.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        habit.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (categoryFilter) {
      result = result.filter(habit => habit.category === categoryFilter);
    }

    setFilteredHabits(result);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleCategoryFilter = (category) => {
    setCategoryFilter(category);
  };

  return (
    <div className="App">
      <header className="bg-blue-500 text-white text-center py-4">
        <h1 className="text-3xl font-bold">Daily Habit Tracker</h1>
      </header>
      <main className="container mx-auto p-4">
        <AddHabitForm onHabitAdded={handleHabitAdded} />
        <div className="my-4">
          <SearchBar onSearch={handleSearch} />
          <HabitFilters 
            categories={[...new Set(habits.map(habit => habit.category))]}
            onCategoryFilter={handleCategoryFilter}
          />
        </div>
        <HabitList habits={filteredHabits} setHabits={setHabits} />
      </main>
    </div>
  );
}

export default App;