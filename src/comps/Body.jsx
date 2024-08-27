import React, { useState, useEffect } from 'react';
import '../styles/body.css'; 


const images = [
    require('../pics/1.jpg'),
    require('../pics/2.jpg'),
    require('../pics/3.jpg'),
    require('../pics/4.jpg'),
    require('../pics/5.jpg'),
    require('../pics/8.jpg'),
    require('../pics/9.jpg'),
    require('../pics/10.jpg'),
    require('../pics/11.jpg'),
    require('../pics/12.jpg'),
    require('../pics/14.jpg'),
    require('../pics/15.jpg'),
    
  ];

const Body = () => {
    const [currentIndex, setCurrentIndex] = useState(0);


  // Function to go to the next slide
  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Function to go to the previous slide (optional if you have buttons)
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  // Auto-slide functionality using useEffect
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext(); // Automatically go to the next slide every 3 seconds
    }, 3000); // Change slide every 3000ms (3 seconds)

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentIndex]); // Dependency array with currentIndex to reset timer on index change

  return (
    <>
      
    <div className="body">
         <div className="description">
        <h1>Welcome to KessieSignature</h1>
        <p>
          At KessieSignature, we offer a curated selection of premium makeup products designed to enhance your natural beauty. Our collection features the latest trends and timeless classics, ensuring you have everything you need to look and feel your best. Explore our range and discover your signature look today!
        </p>
      </div>
      <div className="slider">
        <div className="slider-wrapper">
          <div
            className="slider-image"
            style={{ backgroundImage: `url(${images[currentIndex]})` }}
          ></div>
        </div>
        <button className="slider-button prev" onClick={goToPrevious}>
          &#10094;
        </button>
        <button className="slider-button next" onClick={goToNext}>
          &#10095;
        </button>
      </div>
      <div className="buttons">
      <button className="contact-us-button">Contact Us</button>
      <button className='about-us-button'>About Us</button>
      </div>
    </div>
    </>
  );
};

export default Body;