import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Film from './Film'


export default function FilmList() {

const [filmData, setFilmData] = useState([])

useEffect(() => {
            axios
            .get('https://swapi.dev/api/films')
            .then(res => {
                console.log('films data', res.data.results)
                setFilmData(res.data.results)
            })
            .catch(err => console.log(err))
            },[])

    return (
        <div>
            
            {
                filmData.map((film, index) => (
                    <Film key={index} film={film} />
                ))
            }
        </div>
    )
}
