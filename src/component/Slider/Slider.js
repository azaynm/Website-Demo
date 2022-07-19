import React from 'react'
import processor from './processor.jpg';
import graphic from './graphic-card.jpg';
import './Slider.scss'

const slideImages = [
    {
        url: `${processor}`,
        name: 'Shop',
    },
    {
        url: `${graphic}`,
        name: 'GRAPHIC CARDS',
    },
    {
        url: `${processor}`,
        name: 'Shop',
    },
    {
        url: `${graphic}`,
        name: 'GRAPHIC CARDS',
    },
    {
        url: `${processor}`,
        name: 'VIEW GRAPHIC CARDS',
    },
    {
        url: `${graphic}`,
        name: 'VIEW GRAPHIC CARDS',
    }
];

const Slider = () => {
  return (
    <div className="items-container">
        {slideImages? slideImages.map((slideImage)=>(
            <div className='item'>
            <img src={slideImage.url} alt='#' className="image"/>
            <h4>{slideImage.name}</h4>
          </div>
        )): <h2>No items found!</h2>}
    </div>
  )
}

export default Slider