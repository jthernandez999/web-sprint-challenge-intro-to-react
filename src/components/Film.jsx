import React from 'react'
import Character from './Character'

const Film = (props) => {
console.log(props)

    return(
        <ul>
            <p>Film:</p>
        <p>{props.film.title}</p>
        <p>{props.film.opening_crawl}</p>
        </ul>
    )
}

export default Film