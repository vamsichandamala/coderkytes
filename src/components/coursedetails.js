import './coursedetails.css';
import { Link, useLocation } from 'react-router-dom';
import {motion} from 'framer-motion';

export default function CourseDetails() {
    const location = useLocation();
    const { course } = location.state || {};
    return(
       
        <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        
        className='course-details'> 
            <Link to="/courses"><button> <i style={{color:"white"}} className="fa-solid fa-arrow-left"></i> Back to Courses</button></Link>
            <img src={course.image} alt='img'/>
            <h1>{course.title}</h1>
            <p>{course.description}</p>
            <h2>Course Details</h2>
        </motion.div>


    );
}
