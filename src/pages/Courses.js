import CourseCard from "../components/coursecard";  
import python from '../assets/python_img.png';
import java from '../assets/java.png';
import mern from '../assets/mern.png';
import './courses.css';

const course = [
  {
    title: "Python for Beginners",
    description: "Learn Python from scratch with hands-on projects.",
    image: python,
  },
  {
    title: "JavaScript Essentials",
    description: "Master the fundamentals of JavaScript with real-world exercises.",
    image: java,
  },
  {
    title: "Mern Stack Development",
    description: "Build full-stack applications using MongoDB, Express, React, and Node.js.",
    image: mern
  },
  {
    title: "Mern Stack Development",
    description: "Build full-stack applications using MongoDB, Express, React, and Node.js.",
    image: mern
  },
  {
    title: "Mern Stack Development",
    description: "Build full-stack applications using MongoDB, Express, React, and Node.js.",
    image: mern
  }

];

function Courses() {
  return (
    <div className="courses">
    <h1 className="courses-title">Courses</h1>
    <p className="courses-description">Explore our range of courses designed to help you learn and grow.</p>
    <div className='courses-main-grid'>
      {course.map((item, index) => (
        <CourseCard course={item}/>
      ))}
    </div>
    
    </div>
  );
}

export default Courses;
