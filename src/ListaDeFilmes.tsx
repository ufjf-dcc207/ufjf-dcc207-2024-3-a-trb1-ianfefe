"use client";
import { useEffect, useState } from "react";
import Filme, {FilmeProps} from "./Filme";
import axios from "axios";

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
        <>
            {movies.map((filme: FilmeProps) =>
                <Filme key={filme.title} genres={filme.genres} title={filme.title} poster_path={`https://image.tmdb.org/t/p/original${filme.poster_path}`}></Filme>
            )}
        </>
    )
}