import React from "react";

const Dashboard = () => {
  return (
    <section className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Active Users Card */}
        <div className="bg-secondary-100 rounded-lg shadow-md p-6 cursor-pointer transition duration-300 transform hover:scale-105">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="rounded-full p-3 bg-secondary-500 text-white">
                <i className="fas fa-user-check fa-lg"></i>
              </div>
              <h2 className="text-xl font-semibold ml-4">Active Users</h2>
            </div>
            <p className="text-3xl font-bold">423</p>
          </div>
          <p className="text-gray-600">Total: 453</p>
        </div>

        {/* Inactive Users Card */}
        <div className="bg-secondary-100 rounded-lg shadow-md p-6 cursor-pointer transition duration-300 transform hover:scale-105">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="rounded-full p-3 bg-secondary-500 text-white">
                <i className="fas fa-user-times fa-lg"></i>
              </div>
              <h2 className="text-xl font-semibold ml-4">Inactive Users</h2>
            </div>
            <p className="text-3xl font-bold">30</p>
          </div>
          <p className="text-gray-600">Total: 453</p>
        </div>

        {/* User Listings Table */}
        <div className="col-span-3">
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <div className="bg-gradient-to-b from-gray-300 to-gray-100 rounded-t-lg p-4">
              <h2 className="text-lg font-semibold text-gray-800">
                User Listings
              </h2>
            </div>
            <div className="p-4">
              <table className="w-full text-gray-700">
                <thead>
                  <tr>
                    <th className="py-2">Name</th>
                    <th className="py-2">Email</th>
                    <th className="py-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="cursor-pointer hover:bg-gray-100 transition duration-300">
                    <td>John Doe</td>
                    <td>john@example.com</td>
                    <td className="text-green-500">Active</td>
                  </tr>
                  <tr className="cursor-pointer hover:bg-gray-100 transition duration-300">
                    <td>Jane Smith</td>
                    <td>jane@example.com</td>
                    <td className="text-red-500">Inactive</td>
                  </tr>
                  {/* Add more user listings here */}
                </tbody>
              </table>
              <p className="text-blue-500 mt-2 cursor-pointer hover:underline transition duration-300">
                See More Users...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
