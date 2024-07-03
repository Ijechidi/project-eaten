import React from "react";
import ProfilePic from "../Assets/WIN_20240214_20_25_11_Pro.jpg";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
          Sorry pour la photo mais elle est une bonne cuisinère comme moi
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
          Avec nos repas ne t'en fait pas tu seras satisfait .
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Princess</h2>
      </div>
    </div>
  );
};

export default Testimonial;