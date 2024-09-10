import React from 'react';
import './Services.css';

const images = [
  '/差旅1.png',
  '/差旅2.png',
  '/差旅3.png',
  '/差旅4.png',
  '/差旅5.png',
  '/差旅6.png',
  '/差旅7.png',
  '/差旅8.png',
  '/差旅9.png',
  '/差旅10.png',
  '/差旅11.png',
  '/差旅12.png',
  '/END.png',
];

const ImageGallery = () => {
  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Image ${index}`} />
      ))}
    </div>
  );
};

export default ImageGallery;
