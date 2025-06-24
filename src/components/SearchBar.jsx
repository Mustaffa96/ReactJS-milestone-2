import { useState } from 'react';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm.trim());
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter city name..."
          className="w-full px-6 py-3 text-lg border-0 rounded-full bg-white bg-opacity-20 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-lg placeholder-gray-500 text-gray-700"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md hover:shadow-lg"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
