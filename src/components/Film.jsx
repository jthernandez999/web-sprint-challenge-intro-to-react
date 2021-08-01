import React from 'react'
import styled from 'styled-components'

const Film = (props) => {
console.log(props)

const Ul = styled.ul`
align-content: center;
color: charcoal;
width: 90%;
padding: 1rem;
&:hover {
background-color: white; 
}

justify-content: center;
`

    return(
        <Ul>
            <p>Film:</p>
        <p>{props.film.title}</p>
        <p>{props.film.opening_crawl}</p>
        </Ul>
    )
}

export default Film