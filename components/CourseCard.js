import React from "react";
import { motion } from "framer-motion";

const CourseCard = ({ course }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300"
    >
      <img src={course.image} alt={course.name} className="w-full h-40 object-cover rounded-md mb-3" />
      <h2 className="text-xl font-semibold">{course.name}</h2>
      <p className="text-gray-600">Instructor: {course.instructor}</p>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
        View Course
      </button>
    </motion.div>
  );
};

export default CourseCard;
