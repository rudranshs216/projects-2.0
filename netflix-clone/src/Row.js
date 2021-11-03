import axios from './axios';
import React, { useEffect, useState } from 'react'
import "./Row.css"
import requests from './Requests';

function Row({title,fetchURL,isLargeRow}) {
    const [movies,setMovies] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(fetchURL);
            setMovies(response.data.results);
            return requests;
           
        }
        var audio = new Audio("./play.mp3"); 
        audio.play();
       
       fetchData();
        
    }, [fetchURL,movies])
    function play(){
        var audio = new Audio("./play.mp3"); 
       audio.play();

    }
   
    return (
        <div className="row">
        <h1>{title}</h1>
        <div className="row_posters">
        {movies.map(movie => (
            <img onMouseEnter={play()} className={`row_poster ${isLargeRow && "row_PosterLarge"}`} src={`https://image.tmdb.org/t/p/original${isLargeRow ? movie?.poster_path :movie?.backdrop_path}`} alt="" />
        ))}
        </div>
        
            
        </div>
    )
}

export default Row
