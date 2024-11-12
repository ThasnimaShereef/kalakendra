// src/components/PortfolioSections/Bedroom.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';  // Correct Swiper 8+ CSS import
import { Navigation } from 'swiper/modules'; // Import navigation module
import './PortfolioSection.css';

const entranceDesigns = [
  {
    id: 1,
    title: 'Modern Master Bedroom',
    description: 'A luxurious master bedroom with elegant decor and modern lighting.',
    images: [
      `${process.env.PUBLIC_URL}/image/entrance/Entrance01/E1.jpg`,
      `${process.env.PUBLIC_URL}/image/entrance/Entrance01/E2.jpg`,
      `${process.env.PUBLIC_URL}/image/entrance/Entrance01/E3.jpg`,
    ],
  },
  {
    id: 2,
    title: 'Cozy Guest Bedroom',
    description: 'A warm and inviting guest bedroom with cozy furnishings and soft lighting.',
    images: [
      `${process.env.PUBLIC_URL}/image/entrance/Entrance02/E1.jpg`,
      `${process.env.PUBLIC_URL}/image/entrance/Entrance02/E2.jpg`,
      `${process.env.PUBLIC_URL}/image/entrance/Entrance02/E3.jpg`,
    ],
  },
  {
    id: 3,
    title: 'Cozy Guest Bedroom',
    description: 'A warm and inviting guest bedroom with cozy furnishings and soft lighting.',
    images: [
      `${process.env.PUBLIC_URL}/image/entrance/Entrance03/E1.jpg`,
      `${process.env.PUBLIC_URL}/image/entrance/Entrance03/E2.jpg`,
      `${process.env.PUBLIC_URL}/image/entrance/Entrance03/E3.jpg`,
      `${process.env.PUBLIC_URL}/image/entrance/Entrance03/E4.jpg`,
    ],
  },
  {
    id: 4,
    title: 'Cozy Guest Bedroom',
    description: 'A warm and inviting guest bedroom with cozy furnishings and soft lighting.',
    images: [
      `${process.env.PUBLIC_URL}/image/entrance/Entrance04/E1.jpg`,
    ],
  },
  {
    id: 5,
    title: 'Cozy Guest Bedroom',
    description: 'A warm and inviting guest bedroom with cozy furnishings and soft lighting.',
    images: [
      `${process.env.PUBLIC_URL}/image/entrance/Entrance05/E1.jpeg`,
      `${process.env.PUBLIC_URL}/image/entrance/Entrance05/E2.jpeg`,
    ],
  },
  {
    id: 6,
    title: 'Cozy Guest Bedroom',
    description: 'A warm and inviting guest bedroom with cozy furnishings and soft lighting.',
    images: [
       `${process.env.PUBLIC_URL}/image/entrance/Entrance06/E1.jpg`,
    ],
  },
];

const Entrance = () => {
  return (
    <div className="portfolio-section" >
      <h2>ENTRANCE AREA DESIGNS</h2>
      <p>Explore our bedroom designs that bring comfort and elegance to your space.</p>
      {entranceDesigns.map((design) => (
        <div key={design.id} className="bedroom-card" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/image/logo/texturebeige.jpg)` }}>
          <h3>{design.title}</h3>
          <p>{design.description}</p>
          <Swiper
            spaceBetween={10} // Space between images
            slidesPerView={1} // Show one image at a time
            loop={true} // Infinite loop
            autoplay={{
              delay: 4000, // Auto play every 4 seconds
            }}
            centeredSlides={true} // Centered slides for smooth transitions
            grabCursor={true} // Enable grab cursor for mobile
            speed={800} // Smooth transition speed
            modules={[Navigation]} // Enable navigation
            navigation={{ clickable: true }} // Make arrows clickable
          >
            {design.images.map((img, index) => (
              <SwiperSlide key={index} className="carousel-image">
                <img src={img} alt={`${design.title} ${index + 1}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ))}
    </div>
  );
};

export default Entrance;
