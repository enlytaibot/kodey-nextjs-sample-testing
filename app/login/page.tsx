import React from 'react';

const LoginPage = () => {
  return (
    <div className="flex min-h-screen bg-white">
      <div className="flex-1">
        <img src="/static/images/google.png" alt="Computer" width="500" height="500" />
      </div>
      <div className="flex-1 flex flex-col justify-center px-8">
        <h2 className="text-3xl font-bold mb-2 dark:text-white">ENLYT</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Email</label>
            <input type="email" name="email" id="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" />
          </div>
          <div>
            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-gray-800">Login</button>
          </div>
          <div className="text-center">
            <a href="/signup" className="text-indigo-600 hover:text-indigo-500 dark:hover:text-gray-300">Don't have an account? Sign up</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;