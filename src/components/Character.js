// Write your Character component here
import React from 'react'
import FilmList from './FilmList'


export default function Character ({ character, characters, toggleDetails }) {
    const modal = document.querySelectorAll('.modal')
    return (
        <div>
            <h2>{character.name}</h2>

        <div className='modal'> 
            <p>Height: {character.height}</p>
            <p>Mass: {character.mass}</p>
            <p>Hair Color: {character.hair_color}</p>
            <p>Skin Color: {character.skin_color}</p>

            <div> 
            <FilmList films={characters.films} character={character}/>
            </div>
    
        </div>     
            <button >Details</button>
        </div>
        
    )
}
