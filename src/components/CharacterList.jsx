// Write your Character component here
import React from 'react'
import Character from './Character'
import FilmList from './FilmList'
import styled from 'styled-components'
import Film from './Film'

const CharacterList = (props) => {
    const {character} = props
    console.log('props', props)
    const modal = document.querySelectorAll('.modal')

    const Section = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    `
    return (
        <Section>  
            {
                props.characters.map((character, index) => (
                    <Character key={`Character-${character.name}-${index}`}
                    character={character} /> ))    
                    
            }
           
    
        </Section>
        
    )
}

export default CharacterList