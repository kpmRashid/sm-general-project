import React from 'react'
import './AboutUs.css'
import images from '../../constants/images'

const AboutUs = () => {
  return (
    <div className='app__aboutUs app__wrapper section__padding' id='about'>
      <div className="app__wrapper_info">
        <h1 className="app__aboutUs-h1">About Us</h1>
        <p className="p__opensans app__aboutUs-content" style={{ margin: '1rem 0', textAlign:'justify' }}>SM General Contracting & Construction Co. W.L.L., started as a local community contracting company engaging in civil construction, equipment rental, manpower, material supply and fabrication works, dealing with all kinds of scraps etc.. Our highly skilled construction team and high quality equipments satisfies all norms and specifications .
        </p>
        <p className="p__opensans app__aboutUs-content" style={{ margin: '1rem 0',textAlign:'justify' }}>
          Civil and building construction is the core unit of our business. We are in the construction industßry for the past few years. We continue to strive to deliver an uncompromising quality that has helped cement our reputation in the industry.We are able to deal with interacetable situations by coming up with robust solutions.Perfection is always in ourmind , we assure you of our best services and co-operations in this fields.
        </p>
      </div>
      <div className="app__wrapper_img">
        <img src={images.headerImage1} alt="aboutUs img" />
      </div>
    </div>
  )
}

export default AboutUs