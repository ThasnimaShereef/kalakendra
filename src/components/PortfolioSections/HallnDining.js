// src/components/PortfolioSections/Bedroom.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';  // Correct Swiper 8+ CSS import
import { Navigation } from 'swiper/modules'; // Import navigation module
import './PortfolioSection.css';

const livingroomDesigns = [
  {
    id: 1,
    title: 'Modern Master Bedroom',
    description: 'A luxurious master bedroom with elegant decor and modern lighting.',
    images: [
      `${process.env.PUBLIC_URL}/image/HallnDining/Living01/L1.jpg`,
      `${process.env.PUBLIC_URL}/image/HallnDining/Living01/L2.jpg`,
      
    ],
  },
  {
    id: 2,
    title: 'Cozy Guest Bedroom',
    description: 'A warm and inviting guest bedroom with cozy furnishings and soft lighting.',
    images: [
      `${process.env.PUBLIC_URL}/image/HallnDining/Living02/L1.jpg`,
      `${process.env.PUBLIC_URL}/image/HallnDining/Living02/L2.jpg`,
      `${process.env.PUBLIC_URL}/image/HallnDining/Living02/L3.jpg`,
    ],
  },
  {
    id: 3,
    title: 'Cozy Guest Bedroom',
    description: 'A warm and inviting guest bedroom with cozy furnishings and soft lighting.',
    images: [
      `${process.env.PUBLIC_URL}/image/HallnDining/Living03/L1.jpg`,
      `${process.env.PUBLIC_URL}/image/HallnDining/Living03/L2.jpg`,
    ],
  },
  {
    id: 4,
    title: 'Cozy Guest Bedroom',
    description: 'A warm and inviting guest bedroom with cozy furnishings and soft lighting.',
    images: [
      `${process.env.PUBLIC_URL}/image/HallnDining/Living04/L1.jpg`,
      `${process.env.PUBLIC_URL}/image/HallnDining/Living04/L2.jpg`,
    ],
  },
  {
    id: 5,
    title: 'Cozy Guest Bedroom',
    description: 'A warm and inviting guest bedroom with cozy furnishings and soft lighting.',
    images: [
      `${process.env.PUBLIC_URL}/image/HallnDining/Living05/L1.jpg`,
      `${process.env.PUBLIC_URL}/image/HallnDining/Living05/L2.jpg`,
      `${process.env.PUBLIC_URL}/image/HallnDining/Living05/L3.jpg`,
      `${process.env.PUBLIC_URL}/image/HallnDining/Living05/L4.jpg`,
      `${process.env.PUBLIC_URL}/image/HallnDining/Living05/L5.jpg`,
      `${process.env.PUBLIC_URL}/image/HallnDining/Living05/L6.jpg`,
    ],
  },
  {
    id: 6,
    title: 'Cozy Guest Bedroom',
    description: 'A warm and inviting guest bedroom with cozy furnishings and soft lighting.',
    images: [
      `${process.env.PUBLIC_URL}/image/HallnDining/Living06/L1.jpg`,
      `${process.env.PUBLIC_URL}/image/HallnDining/Living06/L2.jpg`,
      `${process.env.PUBLIC_URL}/image/HallnDining/Living06/L3.jpg`,
    ],
  },
  {
    id: 7,
    title: 'Cozy Guest Bedroom',
    description: 'A warm and inviting guest bedroom with cozy furnishings and soft lighting.',
    images: [
      `${process.env.PUBLIC_URL}/image/HallnDining/Living07/L1.jpeg`,
      `${process.env.PUBLIC_URL}/image/HallnDining/Living07/L2.jpeg`,
      `${process.env.PUBLIC_URL}/image/HallnDining/Living07/L3.jpeg`,
      
    ],
  },
  {
    id: 8,
    title: 'Cozy Guest Bedroom',
    description: 'A warm and inviting guest bedroom with cozy furnishings and soft lighting.',
    images: [
      `${process.env.PUBLIC_URL}/image/HallnDining/Living08/L1.jpg`,
      `${process.env.PUBLIC_URL}/image/HallnDining/Living08/L2.png`,
      `${process.env.PUBLIC_URL}/image/HallnDining/Living08/L3.jpg`,
      `${process.env.PUBLIC_URL}/image/HallnDining/Living08/L4.jpg`,
      `${process.env.PUBLIC_URL}/image/HallnDining/Living08/L5.png`,
      `${process.env.PUBLIC_URL}/image/HallnDining/Living08/L6.png`,
      `${process.env.PUBLIC_URL}/image/HallnDining/Living08/L7.jpg`,
    ],
  },
  {
    id: 9,
    title: 'Cozy Guest Bedroom',
    description: 'A warm and inviting guest bedroom with cozy furnishings and soft lighting.',
    images: [
      `${process.env.PUBLIC_URL}/image/HallnDining/Living09/L1.jpeg`,
      `${process.env.PUBLIC_URL}/image/HallnDining/Living09/L2.jpeg`,
    ],
  },
  {
    id: 10,
    title: 'Cozy Guest Bedroom',
    description: 'A warm and inviting guest bedroom with cozy furnishings and soft lighting.',
    images: [
      `${process.env.PUBLIC_URL}/image/HallnDining/Living10/L1.jpg`,
      `${process.env.PUBLIC_URL}/image/HallnDining/Living10/L2.jpg`,
    ],
  },
  {
    id: 11,
    title: 'Cozy Guest Bedroom',
    description: 'A warm and inviting guest bedroom with cozy furnishings and soft lighting.',
    images: [
      `${process.env.PUBLIC_URL}/image/HallnDining/Living11/L1.jpeg`,
      `${process.env.PUBLIC_URL}/image/HallnDining/Living11/L2.jpeg`,
      `${process.env.PUBLIC_URL}/image/HallnDining/Living11/L3.jpeg`,
    ],
  },
  {
    id: 12,
    title: 'Cozy Guest Bedroom',
    description: 'A warm and inviting guest bedroom with cozy furnishings and soft lighting.',
    images: [
      `${process.env.PUBLIC_URL}/image/HallnDining/Living12/L1.jpeg`,
      `${process.env.PUBLIC_URL}/image/HallnDining/Living12/L2.jpeg`,
      `${process.env.PUBLIC_URL}/image/HallnDining/Living12/L3.jpeg`,
    ],
  },
  {
    id: 13,
    title: 'Cozy Guest Bedroom',
    description: 'A warm and inviting guest bedroom with cozy furnishings and soft lighting.',
    images: [
      `${process.env.PUBLIC_URL}/image/HallnDining/Living13/L1.jpeg`,
      `${process.env.PUBLIC_URL}/image/HallnDining/Living13/L2.jpeg`,
      `${process.env.PUBLIC_URL}/image/HallnDining/Living13/L3.jpeg`,
      `${process.env.PUBLIC_URL}/image/HallnDining/Living13/L4.jpeg`,
      `${process.env.PUBLIC_URL}/image/HallnDining/Living13/L5.jpeg`,
      `${process.env.PUBLIC_URL}/image/HallnDining/Living13/L6.jpeg`,
    ],
  },
];

const HallnDining = () => {
  return (
    <div className="portfolio-section" >
      <h2>LIVING-ROOM DESIGNS</h2>
      <p>Explore our bedroom designs that bring comfort and elegance to your space.</p>
      {livingroomDesigns.map((design) => (
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

export default HallnDining;
