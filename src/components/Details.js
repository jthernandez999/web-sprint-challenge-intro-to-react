import React from 'react'

export default function Details (props) {

    return (
        <div className='container'>
            <h2>Details:</h2>
            {
                details && 
                <>
                    <h2>{character.name}</h2>
                    <p>Height: {character.height}</p>
                    <p>Mass: {character.mass}</p>
                    <p>Hair Color: {character.hair_color}</p>
                    <p>Skin Color: {character.skin_color}</p>
                </>
            }
            <button onClick={close}>close</button>
        </div>
    )
}