import { Link } from 'react-router-dom';
import './coursecard.css'; // Import the CSS file for styling
export default function CourseCard({ course }) {
    return (
        <div className="course-card">
            <div className="card-img">
            <img src={course.image} alt={course.title} className="course-image" />
            </div>
            <div className="card-content">
            <h3 className="course-title">{course.title}</h3>
            <p className="course-description">{course.description}</p>
            </div>
           <div className="card-btn">
             <Link to={"/coursedetails"} state={{course}}><button className="enroll-button">Enroll</button></Link>
           </div>
        </div>
    );
}