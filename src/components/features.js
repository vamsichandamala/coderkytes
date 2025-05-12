import React from "react";
import "./features.css";
import img1 from "../assets/feature-img-1.png";
import img2 from "../assets/feature-img-2.png";
import img3 from "../assets/feature-img-3.png";
import img4 from "../assets/feature-img-4.png";
export default function Features() {
  return (
    <div className="features-container">
      <h2 className="features-heading" >Why to choose us ?</h2>
      <div className="features-list">
        <div className="feature-item">
          <div className="image-section">
            <img src={img1} alt="" style={{width:"380px"}}/>
          </div>
          <div className="text-section">
            <h2>Industry experts as your tutors</h2>
            <p>
              All our tutors are from the top IT companies and they are very
              good at building real-time applications at massive scale.
            </p>
          </div>
        </div>
        <div className="feature-item">
          <div className="feature-item">
        
          <div className="text-section">
            <h2>Beginner to job-ready</h2>
            <p>
              Our curriculam includes 10% theory and 90% real-time concepts. You will be able to build real-time apps by end of the course
            </p>
          </div>
          <div className="image-section">
            <img src={img2} alt="" style={{width:"380px"}}/>
          </div>
        </div>
        </div>
        <div className="feature-item">
          <div className="feature-item">
          <div className="image-section">
            <img src={img3} alt="" style={{width:"380px"}} />
          </div>
          <div className="text-section">
            <h2>Real-time projects & Mock interviews</h2>
            <p>
              You will learn by building real-time applications during the training and We prepare you for the interviews and will take 2 mock interviews
            </p>
          </div>
        </div>
        </div>
        <div className="feature-item">
          <div className="feature-item">
         
          <div className="text-section">
            <h2>Friendly Teaching</h2>
            <p>
              Learn from builders, not just teachers — our LMS connects you with professionals who craft real-world solutions every day.
            </p>
          </div>
           <div className="image-section">
            <img src={img4} alt="" style={{width:"380px"}}/>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
