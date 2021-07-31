import React from 'react'
import Film from './Film'

export default function FilmList(props) {
    const { films } = props
    return (
        <div>
            {films.map((film) => <Film film={film} />)}
        </div>
    )
}