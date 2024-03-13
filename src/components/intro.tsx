export default function Intro() {
  return (
    <div className="grid grid-cols-1 gap-0 md:grid-cols-2 md:gap-10">
      <div className="w-full">
        <h1 className="text-3xl mb-5">Weather-App</h1>
        <p className="text-xl mb-5">
          Welcome to Weather-App! Whether you're planning your day or just
          curious about the forecast, we've got you covered. This app combines
          the power of React, Vite, and Tailwind CSS to provide you with
          accurate weather information for any location from the Open-Meteo
          APIs.
          <br />
          <strong>
            Keep in mind that this application is for demonstration purposes
            only.
          </strong>
        </p>
        <img
          className="border rounded"
          src="./screenshot.jpg"
          alt="screenshot of app"
        />
      </div>
      <div className="w-full">
        <h2 className="text-2xl my-5">Features: </h2>
        <ul className="list-disc list-inside">
          <li className="flex space-x-3 mb-5">
            <CheckIcon />
            <span>
              <strong>Search by City:</strong>
              <br /> Simply enter the name of a city and our app will fetch
              real-time weather data for that location.
            </span>
          </li>
          <li className="flex space-x-3 mb-5">
            <CheckIcon />
            <span>
              <strong>Current Weather Conditions:</strong>
              <br /> Get up-to-date information on temperature, humidity, wind
              speed, and more.
            </span>
          </li>
          <li className="flex space-x-3 mb-5">
            <CheckIcon />
            <span>
              <strong>6-Day Forecast:</strong>
              <br /> Plan ahead with our detailed 6-day weather forecast.
            </span>
          </li>
          <li className="flex space-x-3 mb-5">
            <CheckIcon />
            <span>
              <strong>Charts of Hourly Weather-data:</strong>
              <br />
              Visualize the temperature and weather conditions for the next 24
              hours.
            </span>
          </li>
          <li className="flex space-x-3 mb-5">
            <CheckIcon />
            <span>
              <strong>UV-Index:</strong>
              <br />
              Get the maximum UV index for the day.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6"
  >
    <path
      fillRule="evenodd"
      d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
      clipRule="evenodd"
    />
  </svg>
);
