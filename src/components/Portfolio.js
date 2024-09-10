
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Portfolio.css'; // Custom styles for cards and images

const Portfolio = () => {
  const sections = [
    
    { id: 1, title: 'Bedroom', imgSrc: '/image/bedroom/bedroom5.jpg', link: '/bedroom' },
    { id: 2, title: 'Kids Room', imgSrc: '/image/kidsroom/kids1.jpg', link: '/kids-room' },
    { id: 3, title: 'Kitchen', imgSrc: '/image/kitchen/kitchen1.jpeg', link: '/kitchen' },
    { id: 4, title: 'Living and Dining Area', imgSrc: '/image/HallnDining/living4.jpeg', link: '/living-room' },
    { id: 5, title: 'Puja Room', imgSrc: '/image/pujaroom/pujaroom2.jpg', link: '/puja-room' },
    { id: 6, title: 'Office', imgSrc: '/image/hallnDining/living2.jpg', link: '/office' },
    { id: 7, title: 'Washroom', imgSrc: '/image/washroom/washroom5.jpg', link: '/washroom' },
    { id: 8, title: 'Entrance', imgSrc: '/image/Entrance/entrance.jpg', link: '/entrance' },
    { id: 9, title: 'Exterior', imgSrc: '/image/Exterior/exterior1.jpeg', link: '/exterior' }
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Our Projects</h2>
      <div className="row">
        {sections.map((section) => (
          <div key={section.id} className="col-md-4 mb-4">
            <Link to={section.link} style={{ textDecoration: 'none' }}>
              <div className="card custom-card">
                <img src={section.imgSrc} className="card-img-top custom-img" alt={section.title} />
                <div className="card-body">
                  <h5 className="card-title text-center">{section.title}</h5>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
