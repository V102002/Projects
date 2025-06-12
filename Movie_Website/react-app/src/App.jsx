import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Search from './components/Search'
import Spinner from './components/Spinner'
import MovieCard from './components/MovieCard'

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
  // Storing the Movie from API
  const [movieList,setMovieList]=useState([]);
  // Displaying Error
  const [errorMessage,setErrorMessage]=useState('');
  const[isLoading,setIsLoading]=useState(false);

  const fetchMovies= async ()=>{
    //Loading the movies
    setIsLoading(true);
    setErrorMessage('');
    try{
      //Fetching the movies
      const endpoint=`${API_BASE_URL}?sort_by=popularity.desc`;

      //Calling the API
      const response=await fetch(endpoint,API_OPTIONS); 

      // Parsing the response into a JSON object
      if (!response.ok) {
        throw new Error('Failed to fetch movies');
      }

      //If we do get data
      const data=await response.json();

      if(data.response ==='False'){
        setErrorMessage(data.Error || 'Failed to fetch movies');
        setMovieList([]);
        return;
      }
      setMovieList(data.results || []);
    }catch(error){  
      console.log(`Error fetching movies: ${error}`);
      setErrorMessage("Error fetching movies. Please try again later");
    }finally{
      setIsLoading(false);
    }
  }

  //Fetching the movies at the start 
  useEffect(()=>{
    fetchMovies();
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
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        </header>
        
        <section className='all-movies'>
          <h2 className='mt-[40px]'>All Movies</h2>
          {isLoading?(
            <Spinner/>
          ):errorMessage?(
            <p className='text-red-500'>{errorMessage}</p>
          ):(
            <ul>
              {movieList.map((movie)=>(
                <MovieCard key={movie.id} movie={movie}/>
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  )
}




export default App
