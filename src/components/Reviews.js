
// // src/components/Reviews.js
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import { Carousel } from 'react-responsive-carousel';
import './Reviews.css';

const reviews = [
  { id: 1, name: 'Alice Johnson', review: 'I recently had my office designed by Kala Kendra Interior Design Studio, and I couldn\'t be more pleased with the outcome. Initially, I had some reservations about the design and execution, but the designer was incredibly prompt and attentive throughout the process. She was always on-site whenever there were any questions, ensuring that every detail was addressed.Her guidance in selecting materials and finishes was invaluable, and her commitment to quality was evident in the final inspection, where she meticulously checked every detail to ensure perfection. I’m thrilled with the results and highly recommend Kala Kendra Interior Design Studio to anyone looking for professional and dedicated service. Truly loved the work!', photo: `${process.env.PUBLIC_URL}/image/bedroom/Bedroom01/B1.jpg` },
  { id: 2, name: 'John Doe', review: 'Professional and creative design team!', photo: `${process.env.PUBLIC_URL}/image/bedroom/Bedroom01/B2.jpg` },
  { id: 3, name: 'Emily Smith', review: 'They turned my vision into reality!', photo: `${process.env.PUBLIC_URL}/image/bedroom/Bedroom01/B3.jpg` },
  // Add more reviews as needed
];

const Reviews = () => {
  return (
    <div className="reviews-container">
      <h2>WHAT OUR CLIENTS SAY</h2>
      <Carousel
        showArrows
        infiniteLoop
        autoPlay
        interval={5000}
        showThumbs={false}
        showStatus={false}
        centerMode
        centerSlidePercentage={33.33} // Each slide takes up 1/3 of the width
      >
        {reviews.map((review) => (
          <div className="review-card" key={review.id} style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/image/logo/textureb.jpg)` }}>
            <img src={review.photo} alt={review.name} className="review-photo" />
            <h3>{review.name}</h3>
            <p className="review-text" >"{review.review}"</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Reviews;

// // src/components/Reviews.js
// import React from 'react';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import { Carousel } from 'react-responsive-carousel';
// import './Reviews.css';

// const reviews = [
//   {
//     id: 1,
//     name: 'Alice Johnson',
//     review: 'I recently had my office designed by Kala Kendra Interior Design Studio, and I couldn\'t be more pleased with the outcome. The designer was incredibly attentive throughout the process.',
//     photo: `${process.env.PUBLIC_URL}/image/bedroom/Bedroom01/B1.jpg`
//   },
//   { id: 2, name: 'John Doe', review: 'Professional and creative design team!', photo: `${process.env.PUBLIC_URL}/image/bedroom/Bedroom01/B2.jpg` },
//   { id: 3, name: 'Emily Smith', review: 'They turned my vision into reality!', photo: `${process.env.PUBLIC_URL}/image/bedroom/Bedroom01/B3.jpg` },
// ];

// const Reviews = () => {
//   return (
//     <div className="reviews-container">
//       <h2>WHAT OUR CLIENTS SAY</h2>
//       <Carousel
//         showArrows
//         infiniteLoop
//         autoPlay
//         interval={5000}
//         showThumbs={false}
//         showStatus={false}
//       >
//         {reviews.map((review) => (
//           <div className="review-card" key={review.id}>
//             <img src={review.photo} alt={review.name} className="review-photo" />
//             <h3>{review.name}</h3>
//             <p className="review-text">"{review.review}"</p>
//           </div>
//         ))}
//       </Carousel>
//     </div>
//   );
// };

// export default Reviews;
