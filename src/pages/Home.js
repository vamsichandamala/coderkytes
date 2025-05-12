import React from "react";
import "./home.css";
import { motion } from "framer-motion";
import Founders from "./Founders";
import Maps from "./maps";
import GoogleReviewsWidget from "google-reviews-widget";
import { fadeIn } from "../assets/variants";

import Footer from "../components/footer";
import Features from "../components/features";
const Home = () => {
  return (
    <div className="home-container" id="home-container">
      <div className="home-main">
        <div className="home-left">
          <h2>
            Welcome to <span className="brand typing-text">CoderKytes</span>
          </h2>
          <p>
            Learn in-demand career paths from industry-experts and become
            job-ready
          </p>
          <p>
            Join us to enhance your coding skills and compete with the best!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="get-started"
          >
            Get Started
          </motion.button>
        </div>

        <div className="home-right">
          <div className="contact-container">
            <h2 className="contact-heading">Connect with us</h2>

            <a href="https://wa.me/918340968829" className="contact-button">
              WhatsApp +918340968829
            </a>

            <div className="contact-or">OR</div>

            <a href="tel:+918340968829" className="contact-button">
              Call +918340968829
            </a>
          </div>
        </div>
      </div>

      <motion.div
        variants={fadeIn("right", 0.5)}
        initial="hidden"
        animate="show"
      >
        <Features/>
        <Founders />
      </motion.div>
      <div className="reviews-container">
        <h2 style={{ color: "black" }}>
          What our users say{" "}
          <i style={{ color: "skyblue" }} className="fa-solid fa-users"></i>
        </h2>
        <p style={{ color: "black" }}>
          We value our users feedback and strive to improve our platform.
        </p>

        <GoogleReviewsWidget instanceId="GXKRqRJRbJSkP1IKOF8j" />
      </div>
      <Maps />
      <Footer />
    </div>
  );
};

export default Home;
