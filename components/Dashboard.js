import React from "react";
import Sidebar from "./Sidebar";
import CourseCard from "./CourseCard";
import Announcements from "./Announcements";

const Dashboard = () => {
  const courses = [
    { id: 1, name: "React Basics", instructor: "John Doe" },
    { id: 2, name: "Next.js Mastery", instructor: "Jane Smith" },
    { id: 3, name: "UI/UX Design", instructor: "Emily Johnson" },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1 p-6 overflow-auto">
        <h1 className="text-3xl font-semibold mb-4">Welcome Back! 👋</h1>
        
        {/* Course Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* Announcements */}
        <Announcements />
      </div>
    </div>
  );
};

export default Dashboard;
