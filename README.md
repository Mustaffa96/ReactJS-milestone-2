# React Weather App

A simple weather application built with React that demonstrates the use of functional components, hooks, and API calls.

## Features

- Search for weather by city name
- Display current weather conditions
- Show temperature, humidity, wind speed, and pressure
- Loading states and error handling
- Responsive design with Tailwind CSS

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Create a `.env` file in the root directory and add your OpenWeatherMap API key:
   ```
   VITE_WEATHER_API_KEY=your_api_key_here
   ```
4. Start the development server:
   ```bash
   pnpm dev
   ```

## Technologies Used

- React 18
- Vite
- Tailwind CSS
- Axios for API calls
- OpenWeatherMap API

## Project Structure

```
src/
  ├── components/
  │   ├── ErrorMessage.jsx
  │   ├── LoadingSpinner.jsx
  │   ├── SearchBar.jsx
  │   └── WeatherDisplay.jsx
  ├── App.jsx
  ├── index.jsx
  └── index.css
```

## Getting an API Key

1. Sign up at [WeatherAPI]([https://openweathermap.org/api](https://www.weatherapi.com/my/))
2. Generate an API key
3. Add the API key to your `.env` file
