import React from 'react'

export default function FilmList(props) {
    const { character } = props
    console.log('from FilmList', character.films )

    return (
        <div>
            Films:
            <ul>
                {character.films.map((film, idx) => {
                    return <li key={idx}>{film}</li>
                })}
            </ul>
        </div>
    )
}
