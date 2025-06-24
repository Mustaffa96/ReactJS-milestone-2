import { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherDisplay from './components/WeatherDisplay';
import SearchBar from './components/SearchBar';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = 'https://api.weatherapi.com/v1';

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async (searchCity) => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(`${BASE_URL}/current.json?key=${API_KEY}&q=${searchCity}`);
      setWeather(response.data);
    } catch (err) {
      setError('Failed to fetch weather data. Please try again.');
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (searchTerm) => {
    setCity(searchTerm);
    if (searchTerm) {
      fetchWeather(searchTerm);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-500 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20 backdrop-blur-lg bg-opacity-80">
          <div className="max-w-md mx-auto">
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="text-center mb-8">
                  <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                    Weather Forecast
                  </h1>
                  <p className="text-gray-500 mt-2">Enter a city to get the current weather</p>
                </div>
                <SearchBar onSearch={handleSearch} />
                {loading && <LoadingSpinner />}
                {error && <ErrorMessage message={error} />}
                {weather && <WeatherDisplay weather={weather} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
