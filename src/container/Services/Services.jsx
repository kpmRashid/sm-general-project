import React from 'react'
import './Services.css'
import { MdConstruction } from "react-icons/md";


const Services = () => {
  return (
    <div className='app__services app__wrapper section__padding' id='menu'>
      <h1 className='headtext__roboto'>Services</h1>
      <p className='p__opensans'>Manage every aspect of every service so you can get more done in a day; We have a signature in the following areas such as :
      </p>
      <div className='app__services-content'>
        <div className='app__services-content_one'>
          <div className='app__services-list'>
           <MdConstruction className='app__services-icon' color='#044bb3' fontSize={35}/>
            <h3 className='headtext__roboto'>Mechanical Works</h3>
          </div>
          <div className='app__services-list'>
           <MdConstruction className='app__services-icon' color='#044bb3' fontSize={35}/>
            <h3 className='headtext__roboto'>Civil Works</h3>
          </div>
          <div className='app__services-list'>
           <MdConstruction className='app__services-icon' color='#044bb3' fontSize={35}/>
            <h3 className='headtext__roboto'>Electrical Works</h3>
          </div>
          <div className='app__services-list'>
           <MdConstruction className='app__services-icon' color='#044bb3' fontSize={35}/>
            <h3 className='headtext__roboto'>Plumbing Works</h3>
          </div>
          <div className='app__services-list'>
           <MdConstruction className='app__services-icon' color='#044bb3' fontSize={35}/>
            <h3 className='headtext__roboto'>Piping Works</h3>
          </div>
          <div className='app__services-list'>
           <MdConstruction className='app__services-icon' color='#044bb3' fontSize={35}/>
            <h3 className='headtext__roboto'>Manpower Supply</h3>
          </div>
        </div>
        <div className='app__services-content_one'>
        <div className='app__services-list'>
           <MdConstruction className='app__services-icon' color='#044bb3' fontSize={35}/>
            <h3 className='headtext__roboto'>Landscape Works</h3>
          </div>
          <div className='app__services-list'>
           <MdConstruction className='app__services-icon' color='#044bb3' fontSize={35}/>
            <h3 className='headtext__roboto'>E&T Works</h3>
          </div>
          <div className='app__services-list'>
           <MdConstruction  className='app__services-icon'color='#044bb3' fontSize={35}/>
            <h3 className='headtext__roboto'>Heavy Equipments</h3>
          </div>
          <div className='app__services-list'>
           <MdConstruction  className='app__services-icon' color='#044bb3' fontSize={35}/>
            <h3 className='headtext__roboto'>Industrial Safety</h3>
          </div>
          <div className='app__services-list'>
           <MdConstruction   className='app__services-icon'color='#044bb3' fontSize={35}/>
            <h3 className='headtext__roboto'>HVAC</h3>
          </div>
          <div className='app__services-list'>
           <MdConstruction  className='app__services-icon'c color='#044bb3' fontSize={35}/>
            <h3 className='headtext__roboto'>Trading Division</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services