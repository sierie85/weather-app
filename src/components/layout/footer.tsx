/**
 * Renders the footer component.
 *
 * @component
 * @returns {JSX.Element} The rendered component.
 **/
export default function Footer() {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 gap-10 py-10 mx-auto lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div>
            <h3 className="text-xl">Weather-App</h3>
          </div>

          <div className="max-w-md mt-4 text-black">
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
          </div>
        </div>

        <div className="">
          <div className="text-black">Follow me</div>
          <div className="flex mt-5 space-x-5 text-black">
            <a
              href="https://github.com/sierie85"
              target="_blank"
              rel="noopener"
            >
              <span className="sr-only">Github</span>
              <Github />
            </a>
          </div>
        </div>
      </div>

      <div className="my-10 text-sm text-center text-black">
        Copyright © {new Date().getFullYear()} by sbrie
      </div>
    </div>
  );
}

const Github = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 98 96"
    fill="currentColor"
  >
    <path d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" />
  </svg>
);
