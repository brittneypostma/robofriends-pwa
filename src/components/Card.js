import React from 'react';
import "./Card.css";

const Card = ({name, email, id}) => {
    return (
        <div className='card tc bg-light-green br3 pa3 ma2 grow bw2 shadow-5'>
            <img className='robot' alt='robots' src={`https://robohash.org/${id}`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;