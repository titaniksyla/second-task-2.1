import React from 'react';
import './Card.css';

function Card(props){
 
  return(
    <div className="card">
        <div className="title">
          <h1>{props.cardTitle}</h1>
        </div>
        <div className="descripton">
          <h3>{props.descTitle}</h3>
          <p>{props.descParagraph}</p>
        </div>
        <div className="button">
          <button className="outline-btn">Buy Now</button>
        </div>
    </div>
  );

}

export default Card;