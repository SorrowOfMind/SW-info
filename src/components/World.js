import React from 'react'

const World = ({world}) => {
    return (
        <div className="card">
            <h3 className="name">{world.name}</h3>
            <p>Description: {world.terrain}</p>
            <p>Climate: {world.climate}</p>
            <p>Population: {world.population}</p>
        </div>
    )
}

export default World
