import React from 'react'
import processor from './processor.jpg';
import background from './gaming.jpg';
import "react-multi-carousel/lib/styles.css";
import './Review.scss'



const reviews = [
    {
        url: `${processor}`,
        name: 'John Dave',
        stars: '',
        comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        url: `${processor}`,
        name: 'Brad Pitt',
        stars: '',
        comment: "Lorem Ipsum is simply duIpsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        url: `${processor}`,
        name: 'Nicole Daveson',
        stars: '',
        comment: "Lorem Ipsum is simply  Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },       

];


const Review = () => {
    return (
        <div className="review-container" style={{backgroundImage: `url(${background})`}}>
           {reviews? reviews.map((review)=>(
            <div className='item'>
            <img src={review.url} alt='#' className="image"/>
            <h4>{review.name}</h4>
            <p>{review.comment}</p>
          </div>
        )): <h2>No items found!</h2>}

        </div>
    )
}

export default Review