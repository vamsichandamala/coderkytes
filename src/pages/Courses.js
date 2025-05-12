import React, { useState } from "react";
import CourseCard from "../components/coursecard";
import python from "../assets/python_img.png";
import java from "../assets/java.png";
import mern from "../assets/mern.png";
import sap from "../assets/sap.png";
import salesforce from "../assets/salesforce.png";
import dotnet from "../assets/dot_net.png";

import clang from "../assets/c.png";
import cplus from "../assets/c_plus.png";
import "./courses.css";
import { motion } from "framer-motion";
import { fadeIn } from "../assets/variants";
import Footer from "../components/footer";

const course = [
  {
    title: "Python for Beginners",
    description: "Learn Python from scratch with hands-on projects.",
    image: python,
  },
  {
    title: "Java Essentials",
    description: "Master the fundamentals of Java with real-world exercises.",
    image: java,
  },
  {
    title: "Mern Stack Development",
    description:
      "Build full-stack applications using MongoDB, Express, React, and Node.js.",
    image: mern,
  },
  {
    title:" C language for Beginners",
    description:
      "Learn C programming from scratch with hands-on projects.",
    image: clang,
  },
  {
    title: "C++ for Beginners",
    description:
      "Learn C++ programming from scratch with hands-on projects.",
    image: cplus,
  },
  {
    title: "SAP FICO",
    description:
      "Learn SAP FICO from scratch with hands-on projects.",
    image: sap,
   
  },
  {
    title: "Salesforce",
    description:
      "Learn Salesforce from scratch with hands-on projects.",
    image: salesforce,

  },
  {
    title: ".NET Development",
    description:
      "Learn .NET Development from scratch with hands-on projects.",
    image: dotnet,
   
  },
  {
    
    title: "Java Full Stack Development",
    description:
      "Build full-stack applications using Java, Spring Boot, and React.",
    image: java,
  },
  {
    title: "Python Full Stack Development",
    description:
      "Build full-stack applications using Python, Django, and React.",
    image: python,
  }
];

function Courses() {
  const [search, setSearch] = useState("");

  const filteredCourses = course.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="courses" id="courses">
      <motion.h1
        variants={fadeIn("left", 0.3)}
        initial="hidden"
        animate="show"
        className="courses-title"
      >
        Courses
      </motion.h1>

      <motion.p
        variants={fadeIn("left", 0.3)}
        initial="hidden"
        animate="show"
        className="courses-description"
      >
        Explore our range of courses designed to help you learn and grow.
      </motion.p>

      {/* Search Bar */}
      <motion.div
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        animate="show"
        className="courses-search"
      >
        <input
          type="text"
          placeholder="Search courses..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
      </motion.div>

      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        animate="show"
        className="courses-main-grid"
      >
        {filteredCourses.length > 0 ? (
          filteredCourses.map((item, index) => (
            <CourseCard key={index} course={item} />
          ))
        ) : (
          <p className="no-results">No matching courses found.</p>
        )}
      </motion.div>

      <Footer />
      
    </div>
  );
}

export default Courses;
