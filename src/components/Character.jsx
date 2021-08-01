import React from 'react'
import styled from 'styled-components'
import CharacterList from './CharacterList'
import FilmList from './FilmList'


const Character = (props) => {
    console.log(props)
    const { character } = props

const Article = styled.article`
    padding: 1rem;
    width: 325px;
    &:hover {
    background-color: cornsilk;
    opacity: 0.5;  
    }
    border-radius: 1rem;
    border: 1px solid black;
`

    return (
        <Article>
                    <h2>{character.name}</h2>
                    <p>BirthYear:</p>    
                    <p>{character.birth_year}</p>
                    <p>Height:</p>
                    <p>{character.height}</p>
                    <p>Mass:</p>
                    <p>{character.mass}</p>
                    <p>Hair Color:</p>
                    <p>{character.hair_color}</p>
                    <p>Skin Color:</p>
                    <p>{character.skin_color}</p>
                    <p>Starships:</p>
                    <img src={character.starships.link} alt='img'/>

                    <FilmList />
        </Article>
    )
}

export default Character 