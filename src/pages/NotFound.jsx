import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-9xl font-bold text-gray-200 dark:text-gray-800 mb-4">
          404
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved. 
          Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all duration-200 shadow-lg shadow-blue-600/25"
          >
            Go Home
          </Link>
          <Link
            to="/contact"
            className="px-8 py-4 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-750 text-gray-900 dark:text-white rounded-xl font-semibold transition-all duration-200 border border-gray-200 dark:border-gray-700"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
}
