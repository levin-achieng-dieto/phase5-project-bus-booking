import React, { useState, useEffect } from 'react';
import "./Card.css"


function Card() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('/buses')
        .then(response => response.json())
        .then(data => setCards(data))
    }, []);

    return (
        <li className='cards'>
            {cards.map(card => (
                <div  key={card.id} >
                    
                    <figure className='image'> 
                    <img src={card.image} alt={card.title} />
                    <h2>Number Plate:{card.number_plate}</h2>
                    <p>Fleet Number:{card.fleet_no}</p>
                     </figure>
                    
                 
                   
                </div>
            ))}
        </li>
    );
}

export default Card;
