// // src/components/PortfolioSections/Bedroom.js
// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css/bundle';  // Correct Swiper 8+ CSS import
// import { Navigation } from 'swiper/modules'; // Import navigation module
// import './PortfolioSection.css';

// const kitchenDesigns = [
//   {
//     id: 1,
//     title: 'Modern Master Bedroom',
//     description: 'A luxurious master bedroom with elegant decor and modern lighting.',
//     images: [
//       `${process.env.PUBLIC_URL}/image/kitchen/Kitchen01/KT1.jpeg`,
//       `${process.env.PUBLIC_URL}/image/kitchen/kitchen01/KT2.jpeg`,
//     ],
//   },
//   {
//     id: 2,
//     title: 'Cozy Guest Bedroom',
//     description: 'A warm and inviting guest bedroom with cozy furnishings and soft lighting.',
//     images: [
//       `${process.env.PUBLIC_URL}/image/kitchen/Kitchen02/KT1.jpeg`,
//       `${process.env.PUBLIC_URL}/image/kitchen/Kitchen02/KT2.jpeg`,
//       `${process.env.PUBLIC_URL}/image/kitchen/Kitchen02/KT3.jpeg`,
//     ],
//   },
// ];

// const Kitchen = () => {
//   return (
//     <div className="portfolio-section" >
//       <h2>KITCHEN DESIGNS</h2>
//       <p>Explore our bedroom designs that bring comfort and elegance to your space.</p>
//       {kitchenDesigns.map((design) => (
//         <div key={design.id} className="bedroom-card" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/image/logo/texturebeige.jpg)` }}>
//           <h3>{design.title}</h3>
//           <p>{design.description}</p>
//           <Swiper
//             spaceBetween={10} // Space between images
//             slidesPerView={1} // Show one image at a time
//             loop={true} // Infinite loop
//             autoplay={{
//               delay: 4000, // Auto play every 4 seconds
//             }}
//             centeredSlides={true} // Centered slides for smooth transitions
//             grabCursor={true} // Enable grab cursor for mobile
//             speed={800} // Smooth transition speed
//             modules={[Navigation]} // Enable navigation
//             navigation={{ clickable: true }} // Make arrows clickable
//           >
//             {design.images.map((img, index) => (
//               <SwiperSlide key={index} className="carousel-image">
//                 <img src={img} alt={`${design.title} ${index + 1}`} />
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Kitchen;

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { Navigation } from 'swiper/modules';
import './PortfolioSection.css';

const kitchenDesigns = [
  {
    id: 1,
    title: 'Modern Master Bedroom',
    description: 'A luxurious master bedroom with elegant decor and modern lighting.',
    images: [
      `${process.env.PUBLIC_URL}/image/kitchen/Kitchen01/KT1.jpeg`,
      `${process.env.PUBLIC_URL}/image/kitchen/kitchen01/KT2.jpeg`,
    ],
  },
  {
    id: 2,
    title: 'Cozy Guest Bedroom',
    description: 'A warm and inviting guest bedroom with cozy furnishings and soft lighting.',
    images: [
      `${process.env.PUBLIC_URL}/image/kitchen/Kitchen02/KT1.jpeg`,
      `${process.env.PUBLIC_URL}/image/kitchen/Kitchen02/KT2.jpeg`,
      `${process.env.PUBLIC_URL}/image/kitchen/Kitchen02/KT3.jpeg`,
    ],
  },
];

const Kitchen = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [fullScreenImages, setFullScreenImages] = useState([]);

  // Open full-screen view with images
  const openFullScreen = (images) => {
    setFullScreenImages(images);
    setIsFullScreen(true);
  };

  // Close full-screen view
  const closeFullScreen = () => {
    setIsFullScreen(false);
    setFullScreenImages([]);
  };

  return (
    <div className="portfolio-section">
      <h2>KITCHEN DESIGNS</h2>
      <p>Explore our kitchen designs that bring elegance and functionality to your space.</p>
      {kitchenDesigns.map((design) => (
        <div key={design.id} className="bedroom-card" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/image/logo/texturebeige.jpg)` }}>
          <h3>{design.title}</h3>
          <p>{design.description}</p>

          {/* Main Image */}
          <img
            src={design.images[0]}
            alt={design.title}
            className="main-design-image"
            onClick={() => openFullScreen(design.images)} // Open full-screen on image click
          />

          {/* View More Button */}
          <button className="view-more-button" onClick={() => openFullScreen(design.images)}>
            View More
          </button>
        </div>
      ))}

      {/* Full-Screen Image View */}
      {isFullScreen && (
        <div className="full-screen-view" onClick={closeFullScreen}>
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            loop
            navigation
            modules={[Navigation]}
          >
            {fullScreenImages.map((img, index) => (
              <SwiperSlide key={index}>
                <img src={img} alt={`Preview ${index + 1}`} className="full-screen-image" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
};

export default Kitchen;
