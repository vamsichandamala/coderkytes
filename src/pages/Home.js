import React from 'react';
import './home.css';
import {motion} from 'framer-motion';
import Founders from './Founders';
import Maps from './maps';
import GoogleReviewsWidget from 'google-reviews-widget';
const Home = () => {
    return (
        
        <div className="home-container">
            <div className="home-content">
            <h1>Welcome to CoderKytes</h1>
            <p>Your one-stop solution for all coding challenges and competitions.</p>
            <p>Join us to enhance your coding skills and compete with the best!</p>
            <div className='home-btns'>
            <button>  Get Started  </button>
            <button>  Contact Us  </button>
            </div>
            </div>
            <motion.div
            initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
  
            transition={{ duration: 2, ease: 'easeOut' }} 
            className="home-features">
                <div className="feature-card">
                    <i className="fa-solid fa-book-open"></i>
                    <h2>Courses</h2>
    
                </div>
                <div className="feature-card">
                    <i className="fa-solid fa-trophy"></i>
                    <h2>Competitions</h2>
                   
                </div>
                <div className="feature-card">
                    <i className="fa-solid fa-users"></i>
                    <h2>Community</h2>
                   
                </div>
                <div className="feature-card">
                    <i className="fa-solid fa-users"></i>
                    <h2>Community</h2>
                   
                </div>
            </motion.div>
            <div className='reviews-container'>
                <h2 style={{color:"white"}} >What our users say <i style={{color:"skyblue"}} className="fa-solid fa-users"></i></h2>
                <p style={{color:"white"}}>We value our users feedback and strive to improve our platform.</p>

                <GoogleReviewsWidget instanceId="GXKRqRJRbJSkP1IKOF8j" />
            </div>
            <Maps/>
          
        </div>
       
    );
};

export default Home;