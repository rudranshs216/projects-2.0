import React from 'react'
import Banner from './Banner'
import "./HomeScreen.css"
import Nav from './Nav'
import requests from './Requests'
import Row from './Row'

function HomeScreen() {
    return (
        <div>
        <Nav/>
        <Banner/>  
        <Row title="Trending Now" fetchURL={requests.fetchTrending} isLargeRow="true" />  
        <Row title="Netflix Originals" fetchURL={requests.fetchNetflixOriginals} />   
        <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />  
        <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />  
        <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />  
        <Row title="Documentries" fetchURL={requests.fetchDocumentaries} />  
        </div>
    )
}

export default HomeScreen
