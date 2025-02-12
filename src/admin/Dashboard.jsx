import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { FaUsers, FaEnvelope, FaClipboardList } from "react-icons/fa";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Consultations",
      count: 245,
      icon: <FaUsers className="text-2xl text-blue-600 dark:text-blue-300" />,
      color: "blue"
    },
    {
      title: "Newsletter Subscribers",
      count: 1230,
      icon: <FaEnvelope className="text-2xl text-purple-600 dark:text-purple-300" />,
      color: "purple"
    },
    {
      title: "Total Requirements",
      count: 89,
      icon: <FaClipboardList className="text-2xl text-teal-600 dark:text-teal-300" />,
      color: "teal"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <Sidebar />
      
      <main className="p-4 sm:ml-64 pt-20">
        <div className="p-4 bg-white rounded-lg shadow-sm dark:bg-gray-800">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl bg-gradient-to-br from-${stat.color}-50 to-${stat.color}-100 
                dark:from-${stat.color}-900 dark:to-${stat.color}-800 shadow-sm hover:shadow-lg 
                transition-all duration-300 transform hover:-translate-y-1`}
              >
                <div className="flex flex-col items-center">
                  <div className={`rounded-full p-3 bg-${stat.color}-200 dark:bg-${stat.color}-700 mb-3`}>
                    {stat.icon}
                  </div>
                  <h3 className={`text-lg font-medium text-${stat.color}-600 dark:text-${stat.color}-300`}>
                    {stat.title}
                  </h3>
                  <p className={`text-4xl font-bold text-${stat.color}-800 dark:text-${stat.color}-100`}>
                    {stat.count.toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Chart Section */}
          <div className="mb-6 p-6 bg-white rounded-xl shadow-sm dark:bg-gray-800">
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
              Device Usage Analytics
            </h3>
            <div className="h-[300px]">
              <canvas id="deviceUsageChart"></canvas>
            </div>
          </div>

          {/* Recent Activities Table */}
          <div className="rounded-xl shadow-sm overflow-hidden">
            <div className="p-4 bg-gray-50 dark:bg-gray-700">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                Recent Activities
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Device
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Last Active
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Energy Usage
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                      Smart Thermostat
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                        Active
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      2 minutes ago
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      0.8 kWh
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;