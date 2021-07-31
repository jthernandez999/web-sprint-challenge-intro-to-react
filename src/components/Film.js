import React from 'react'

export default function Film(props) {
    const { film } = props
    console.log('props', props)
    return (
        <div>
            <ul>
                <li>{film}</li>
            </ul>
        </div>
    )
}






{/* <ul>
{characters.map((character) => {
    console.log(character.films, 'character films')
    character.films.map((film) => {
        console.log(film, 'film')
        return <li>{film}</li>
    })
    
})}
</ul> */}