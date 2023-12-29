import { useState, useEffect } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import images from '../../constants/images';
import './Header.css';

const imageData = [
  { id: 1, src: images.headerImage1, alt: 'Photo 1' },
  { id: 2, src: images.headerImage2, alt: 'Photo 2' },
  { id: 3, src: images.headerImage3, alt: 'Photo 3' },
  { id: 4, src: images.headerImage4, alt: 'Photo 4' },
  { id: 5, src: images.headerImage5, alt: 'Photo 5' },
];

const Header = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleArrowClick = (direction) => {
    if (direction === 'left') {
      setCurrentImage((prev) => (prev === 0 ? imageData.length - 1 : prev - 1));
    } else if (direction === 'right') {
      setCurrentImage((prev) => (prev === imageData.length - 1 ? 0 : prev + 1));
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prev) => (prev === imageData.length - 1 ? 0 : prev + 1));
    }, 8000); 

    return () => clearInterval(intervalId);

  }, []); 

  return (
    <div className='app__header' id='home'>
      <div className="app__header-img">
        {imageData.map((image, index) => (
          <img
            key={image.id}
            src={image.src}
            alt={image.alt}
            className={index === currentImage ? 'visible' : 'hidden'}
          />
        ))}
        <FaAngleLeft className="arrow left" onClick={() => handleArrowClick('left')} />
        <FaAngleRight className="arrow right" onClick={() => handleArrowClick('right')} />
      </div>
      <div className="text-container">
        <h1 className='headtext__roboto'>Where Vision Meets Concrete Reality</h1>
        <p className='p__opensans'>Masters of Construction: Building Beyond Boundaries</p>
        <button className='custom__button'>Explore us</button>
      </div>
    </div>
  );
};

export default Header;
