"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function ListaDeFilmes() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getMovies();
    }, [])

    const getMovies = () => {
        axios({
            method: "get",
            url: "https://api.themoviedb.org/3/discover/movie",
            params: {
                api_key: "e57452851ab15819803da405a3a5578e",
                language: "pt-br"                
            }
        }).then(response => {
            setMovies(response.data.results)
            console.log(response)
        })
    }
    
    return (
        <ul className="lista_filme">
            {movies.map((movie) =>
                <li>{movie.title}</li>
            )}
        </ul>
    )
}