function WeatherDisplay({ weather }) {
  const current = weather.current;
  const location = weather.location;

  return (
    <div className="mt-8">
      <div className="bg-white bg-opacity-50 backdrop-blur-md rounded-xl shadow-lg p-6 transition-all duration-500 hover:shadow-xl">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-3xl font-bold text-gray-800">
              {location.name}
              <span className="text-lg font-medium text-gray-600 ml-2">
                {location.country}
              </span>
            </h2>
            <p className="text-gray-600 mt-1">
              {new Date().toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </div>
          <div className="flex items-center">
            <img
              src={current.condition.icon}
              alt={current.condition.text}
              className="w-24 h-24 object-contain"
            />
            <div className="ml-4 text-center">
              <p className="text-5xl font-bold text-gray-800">
                {Math.round(current.temp_c)}°C
              </p>
              <p className="text-lg text-gray-600 capitalize">
                {current.condition.text}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          <div className="bg-white bg-opacity-75 p-4 rounded-lg shadow transition-all duration-300 hover:shadow-md">
            <p className="text-gray-500 text-sm">Feels like</p>
            <p className="text-xl font-semibold text-gray-800">
              {Math.round(current.feelslike_c)}°C
            </p>
          </div>
          <div className="bg-white bg-opacity-75 p-4 rounded-lg shadow transition-all duration-300 hover:shadow-md">
            <p className="text-gray-500 text-sm">Humidity</p>
            <p className="text-xl font-semibold text-gray-800">
              {current.humidity}%
            </p>
          </div>
          <div className="bg-white bg-opacity-75 p-4 rounded-lg shadow transition-all duration-300 hover:shadow-md">
            <p className="text-gray-500 text-sm">Wind Speed</p>
            <p className="text-xl font-semibold text-gray-800">
              {current.wind_kph} km/h
            </p>
          </div>
          <div className="bg-white bg-opacity-75 p-4 rounded-lg shadow transition-all duration-300 hover:shadow-md">
            <p className="text-gray-500 text-sm">Pressure</p>
            <p className="text-xl font-semibold text-gray-800">
              {current.pressure_mb} hPa
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherDisplay;
