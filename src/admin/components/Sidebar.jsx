import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaHome, 
  FaCog, 
  FaChartBar, 
  FaLightbulb, 
  FaThermometerHalf,
  FaVideo,
  FaLock,
  FaSignOutAlt
} from 'react-icons/fa';

const Sidebar = () => {
  const menuItems = [
    { icon: FaHome, label: 'Dashboard', path: '/dashboard' },
    { icon: FaLightbulb, label: 'Lighting', path: '/lighting' },
    { icon: FaThermometerHalf, label: 'Climate', path: '/climate' },
    { icon: FaVideo, label: 'Security', path: '/security' },
    { icon: FaChartBar, label: 'Analytics', path: '/analytics' },
    { icon: FaLock, label: 'Access Control', path: '/access' },
    { icon: FaCog, label: 'Settings', path: '/settings' },
  ];

  return (
    <aside className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
        <ul className="space-y-2 font-medium">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className="flex items-center p-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <item.icon className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-white" />
                <span className="ml-3">{item.label}</span>
              </Link>
            </li>
          ))}
          <li className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-700">
            <button
              className="flex items-center w-full p-3 text-gray-900 rounded-lg dark:text-white hover:bg-red-100 dark:hover:bg-red-700 group"
              onClick={() => {/* Add logout logic */}}
            >
              <FaSignOutAlt className="w-5 h-5 text-red-500" />
              <span className="ml-3">Sign Out</span>
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;