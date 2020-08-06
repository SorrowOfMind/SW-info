import React from 'react';


const Hero = ({hero}) => {
    return (
        <div className="card">
            <h3 className="name">{hero.name}</h3>
            <p>B-day: {hero.birth_year}</p>
            <p>Height: {hero.height}</p>
            <p>Eye color: {hero.eye_color}</p>
        </div>
    )
}

export default Hero
