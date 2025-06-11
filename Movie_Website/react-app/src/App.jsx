import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Search from './components/Search'

// Where can the site ask for the movies
const API_BASE_URL='https://api.themoviedb.org/3/discover/movie';

// Get access to the API key
const API_KEY= import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS={
  method:'GET', //Get some movies
  headers:{
    accept:'application/json', //The API will send a JSON object 
    Authorization: `Bearer ${API_KEY}`, //Authenticate the API, verifies who is trying to making that request
  }
}

//The Main Component
const App=()=>{
  const [searchTerm,setSearchTerm]=useState('');

  const fetchMovies=async ()=>{
    try{

    }catch(error){
      console.log(`Error fetching movies: ${error}`);
    }
  }

  useEffect(()=>{

  },[])

  return (
    <main>
      <div className='pattern'/>

      <div className='wrapper'>
        <header>
          <img src="./hero.png" alt="Hero Banner" />
          <h1>
            Find <span className='text-gradient'>Movies</span> You will Enjoy Without the Hassle
          </h1>
        </header>
        
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      </div>
    </main>
  )
}




export default App
