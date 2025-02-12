import { motion } from "framer-motion";
import { FaChalkboardTeacher, FaUsers, FaBookOpen } from "react-icons/fa";

export default function Dashboard() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <motion.div
        className="w-64 bg-gray-900 text-white p-6"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-bold">ClassLite</h1>
        <nav className="mt-6 space-y-4">
          <p className="text-gray-400">Navigation</p>
          <button className="w-full text-left p-2 rounded-md hover:bg-gray-700">
            📚 Dashboard
          </button>
          <button className="w-full text-left p-2 rounded-md hover:bg-gray-700">
            📖 Classes
          </button>
          <button className="w-full text-left p-2 rounded-md hover:bg-gray-700">
            📝 Assignments
          </button>
        </nav>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100">
        <h2 className="text-3xl font-bold">Welcome Back!</h2>

        {/* Stats Cards */}
        <div className="mt-6 grid grid-cols-3 gap-6">
          <motion.div
            className="p-4 bg-white shadow-lg rounded-xl flex items-center space-x-4"
            whileHover={{ scale: 1.05 }}
          >
            <FaChalkboardTeacher className="text-blue-500 text-3xl" />
            <div>
              <p className="text-gray-500">Total Classes</p>
              <h3 className="text-2xl font-bold">8</h3>
            </div>
          </motion.div>

          <motion.div
            className="p-4 bg-white shadow-lg rounded-xl flex items-center space-x-4"
            whileHover={{ scale: 1.05 }}
          >
            <FaUsers className="text-green-500 text-3xl" />
            <div>
              <p className="text-gray-500">Total Students</p>
              <h3 className="text-2xl font-bold">120</h3>
            </div>
          </motion.div>

          <motion.div
            className="p-4 bg-white shadow-lg rounded-xl flex items-center space-x-4"
            whileHover={{ scale: 1.05 }}
          >
            <FaBookOpen className="text-yellow-500 text-3xl" />
            <div>
              <p className="text-gray-500">Assignments</p>
              <h3 className="text-2xl font-bold">12</h3>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
