// Write your Character component here
import React from 'react'
import Film from './Film'


export default function Character ({ character, characters }) {

    return (
        <div>
            <h2>{character.name}</h2>
            <p>Height: {character.height}</p>
            <p>Mass: {character.mass}</p>
            <p>Hair Color: {character.hair_color}</p>
            <p>Skin Color: {character.skin_color}</p>
            <Film films={characters.films}/>
            
        </div>
    )
}
