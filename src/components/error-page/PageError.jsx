import { Link } from "react-router";
import {  useRouteError } from "react-router";


const PageError = () => {
  const error = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-6 text-center">
      <div className="max-w-md">
        <h1 className="text-9xl font-black text-gray-200 tracking-widest relative">
          404
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl font-bold text-blue-600 w-full">
            Oops! Page Not Found
          </span>
        </h1>
        
        <p className="text-gray-500 mt-8 mb-10 text-lg">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        {error && (
          <div className="mb-8 p-4 bg-gray-50 border-l-4 border-red-500 text-left inline-block">
            <p className="text-xs uppercase tracking-widest text-gray-400 font-bold">Error Details:</p>
            <p className="text-red-600 font-mono italic">
              {error.statusText || error.message}
            </p>
          </div>
        )}

        <div>
          <Link
            to="/"
            className="px-8 py-3 bg-gray-900 text-white font-medium rounded-md hover:bg-blue-600 transition-colors duration-300 shadow-xl"
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageError;