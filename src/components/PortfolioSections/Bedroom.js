// src/components/PortfolioSections/Bedroom.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';  // Correct Swiper 8+ CSS import
import { Navigation } from 'swiper/modules'; // Import navigation module
import './PortfolioSection.css';

const bedroomDesigns = [
  {
    id: 1,
    title: 'Modern Master Bedroom',
    description: 'A luxurious master bedroom with elegant decor and modern lighting.',
    images: [
      `${process.env.PUBLIC_URL}/image/bedroom/Bedroom01/B1.jpg`,
      `${process.env.PUBLIC_URL}/image/bedroom/Bedroom01/B2.jpg`,
      `${process.env.PUBLIC_URL}/image/bedroom/Bedroom01/B3.jpg`,
    ],
  },
  {
    id: 2,
    title: 'Cozy Guest Bedroom',
    description: 'A warm and inviting guest bedroom with cozy furnishings and soft lighting.',
    images: [
      `${process.env.PUBLIC_URL}/image/bedroom/Bedroom02/B1.jpg`,
      `${process.env.PUBLIC_URL}/image/bedroom/Bedroom02/B2.jpg`,
    ],
  },
  {
    id: 3,
    title: 'Cozy Guest Bedroom',
    description: 'A warm and inviting guest bedroom with cozy furnishings and soft lighting.',
    images: [
      `${process.env.PUBLIC_URL}/image/bedroom/Bedroom03/B1.jpg`,
      `${process.env.PUBLIC_URL}/image/bedroom/Bedroom03/B2.jpg`,
    ],
  },
  {
    id: 4,
    title: 'Cozy Guest Bedroom',
    description: 'A warm and inviting guest bedroom with cozy furnishings and soft lighting.',
    images: [
      `${process.env.PUBLIC_URL}/image/bedroom/Bedroom04/B1.jpg`,
      `${process.env.PUBLIC_URL}/image/bedroom/Bedroom04/B2.jpg`,
      `${process.env.PUBLIC_URL}/image/bedroom/Bedroom04/B3.jpg`,
      `${process.env.PUBLIC_URL}/image/bedroom/Bedroom04/B4.jpg`,
    ],
  },
  {
    id: 5,
    title: 'Cozy Guest Bedroom',
    description: 'A warm and inviting guest bedroom with cozy furnishings and soft lighting.',
    images: [
      `${process.env.PUBLIC_URL}/image/bedroom/Bedroom05/B1.jpg`,
      `${process.env.PUBLIC_URL}/image/bedroom/Bedroom05/B2.jpg`,
      `${process.env.PUBLIC_URL}/image/bedroom/Bedroom05/B3.jpg`,
      `${process.env.PUBLIC_URL}/image/bedroom/Bedroom05/B4.jpg`,
    ],
  },
  {
    id: 6,
    title: 'Cozy Guest Bedroom',
    description: 'A warm and inviting guest bedroom with cozy furnishings and soft lighting.',
    images: [
      `${process.env.PUBLIC_URL}/image/bedroom/Bedroom06/B1.jpg`,
      `${process.env.PUBLIC_URL}/image/bedroom/Bedroom06/B2.jpg`,
      `${process.env.PUBLIC_URL}/image/bedroom/Bedroom06/B3.jpg`,
      `${process.env.PUBLIC_URL}/image/bedroom/Bedroom06/B4.jpg`,
      `${process.env.PUBLIC_URL}/image/bedroom/Bedroom06/B5.jpg`,
    ],
  },
  {
    id: 7,
    title: 'Cozy Guest Bedroom',
    description: 'A warm and inviting guest bedroom with cozy furnishings and soft lighting.',
    images: [
      `${process.env.PUBLIC_URL}/image/bedroom/Bedroom07/B1.jpg`,
      
    ],
  },
  {
    id: 8,
    title: 'Cozy Guest Bedroom',
    description: 'A warm and inviting guest bedroom with cozy furnishings and soft lighting.',
    images: [
      `${process.env.PUBLIC_URL}/image/bedroom/Bedroom08/B1.jpg`,
      `${process.env.PUBLIC_URL}/image/bedroom/Bedroom08/B2.jpg`,
      `${process.env.PUBLIC_URL}/image/bedroom/Bedroom08/B3.jpg`,
      `${process.env.PUBLIC_URL}/image/bedroom/Bedroom08/B4.jpg`,
      `${process.env.PUBLIC_URL}/image/bedroom/Bedroom08/B5.jpg`,
    ],
  },
  {
    id: 9,
    title: 'Cozy Guest Bedroom',
    description: 'A warm and inviting guest bedroom with cozy furnishings and soft lighting.',
    images: [
      `${process.env.PUBLIC_URL}/image/bedroom/Bedroom09/B1.jpg`,
      `${process.env.PUBLIC_URL}/image/bedroom/Bedroom09/B2.jpg`,
      `${process.env.PUBLIC_URL}/image/bedroom/Bedroom09/B3.jpg`,
      `${process.env.PUBLIC_URL}/image/bedroom/Bedroom09/B4.jpg`,
      `${process.env.PUBLIC_URL}/image/bedroom/Bedroom09/B5.jpg`,
      `${process.env.PUBLIC_URL}/image/bedroom/Bedroom09/B6.jpg`,
    ],
  },
  {
    id: 10,
    title: 'Cozy Guest Bedroom',
    description: 'A warm and inviting guest bedroom with cozy furnishings and soft lighting.',
    images: [
      `${process.env.PUBLIC_URL}/image/bedroom/Bedroom10/B1.jpeg`,
    ],
  },
  {
    id: 11,
    title: 'Cozy Guest Bedroom',
    description: 'A warm and inviting guest bedroom with cozy furnishings and soft lighting.',
    images: [
      `${process.env.PUBLIC_URL}/image/bedroom/Bedroom11/B1.jpg`,
      `${process.env.PUBLIC_URL}/image/bedroom/Bedroom11/B2.jpg`,
      `${process.env.PUBLIC_URL}/image/bedroom/Bedroom11/B3.jpg`,
    ],
  },
  {
    id: 12,
    title: 'Cozy Guest Bedroom',
    description: 'A warm and inviting guest bedroom with cozy furnishings and soft lighting.',
    images: [
      `${process.env.PUBLIC_URL}/image/bedroom/Bedroom12/B1.jpeg`,
      `${process.env.PUBLIC_URL}/image/bedroom/Bedroom12/B2.jpeg`,
      `${process.env.PUBLIC_URL}/image/bedroom/Bedroom12/B3.jpeg`,
      `${process.env.PUBLIC_URL}/image/bedroom/Bedroom12/B4.jpeg`,
    ],
  },
  {
    id: 13,
    title: 'Cozy Guest Bedroom',
    description: 'A warm and inviting guest bedroom with cozy furnishings and soft lighting.',
    images: [
      `${process.env.PUBLIC_URL}/image/bedroom/Bedroom13/B1.jpeg`,
      `${process.env.PUBLIC_URL}/image/bedroom/Bedroom13/B2.jpeg`,
      `${process.env.PUBLIC_URL}/image/bedroom/Bedroom13/B3.jpeg`,
      `${process.env.PUBLIC_URL}/image/bedroom/Bedroom13/B4.jpeg`,
      `${process.env.PUBLIC_URL}/image/bedroom/Bedroom13/B5.jpeg`,
    ],
  },
  {
    id: 14,
    title: 'Cozy Guest Bedroom',
    description: 'A warm and inviting guest bedroom with cozy furnishings and soft lighting.',
    images: [
      `${process.env.PUBLIC_URL}/image/bedroom/Bedroom14/B1.jpeg`,
      `${process.env.PUBLIC_URL}/image/bedroom/Bedroom14/B2.jpeg`,
      `${process.env.PUBLIC_URL}/image/bedroom/Bedroom14/B3.jpeg`,
    ],
  },
  {
    id: 15,
    title: 'Cozy Guest Bedroom',
    description: 'A warm and inviting guest bedroom with cozy furnishings and soft lighting.',
    images: [
      `${process.env.PUBLIC_URL}/image/bedroom/Bedroom15/B1.jpeg`,
      `${process.env.PUBLIC_URL}/image/bedroom/Bedroom15/B2.jpeg`,
      `${process.env.PUBLIC_URL}/image/bedroom/Bedroom15/B3.jpeg`,
    ],
  },
  {
    id: 16,
    title: 'Cozy Guest Bedroom',
    description: 'A warm and inviting guest bedroom with cozy furnishings and soft lighting.',
    images: [
      `${process.env.PUBLIC_URL}/image/bedroom/Bedroom16/B1.jpeg`,
      `${process.env.PUBLIC_URL}/image/bedroom/Bedroom16/B2.jpeg`,
      `${process.env.PUBLIC_URL}/image/bedroom/Bedroom16/B3.jpeg`,
    ],
  },
  {
    id: 17,
    title: 'Cozy Guest Bedroom',
    description: 'A warm and inviting guest bedroom with cozy furnishings and soft lighting.',
    images: [
      `${process.env.PUBLIC_URL}/image/bedroom/Bedroom17/B1.jpeg`,
      `${process.env.PUBLIC_URL}/image/bedroom/Bedroom17/B2.jpeg`,
      `${process.env.PUBLIC_URL}/image/bedroom/Bedroom17/B3.jpeg`,
    ],
  },
  {
    id: 18,
    title: 'Cozy Guest Bedroom',
    description: 'A warm and inviting guest bedroom with cozy furnishings and soft lighting.',
    images: [
      `${process.env.PUBLIC_URL}/image/bedroom/Bedroom18/B1.jpeg`,
      `${process.env.PUBLIC_URL}/image/bedroom/Bedroom18/B2.jpeg`,
    ],
  },
];

const Bedroom = () => {
  return (
    <div className="portfolio-section" >
      <h2>BEDROOM DESIGNS</h2>
      <p>Explore our bedroom designs that bring comfort and elegance to your space.</p>
      {bedroomDesigns.map((design) => (
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

export default Bedroom;
