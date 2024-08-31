import React from 'react';

const HabitFilters = ({ categories, onCategoryFilter }) => {
  const handleCategoryChange = (e) => {
    onCategoryFilter(e.target.value);
  };

  return (
    <div className="mb-4">
      <select
        onChange={handleCategoryChange}
        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
      >
        <option value="">All Categories</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default HabitFilters;