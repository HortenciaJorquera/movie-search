import React,{useState} from 'react'

export default function SearchBar() {

    const [query,setQuery]=useState('');
    const [movies,setMovies]=useState([]);


    const handleChange=(event)=>{
        setQuery(event.target.value);
    }
    
    const handleSubmit=(event)=> {
        event.preventDefault()
        
        const url = `https://api.themoviedb.org/3/search/movie?api_key=cd66dcbd2ba24f5d7b6ef8fc01816a77&language=en-US&query=${query}&page=1&include_adult=false`;
        
        fetch(url)
            .then(res=>res.json())
            .then(res=>{
                setMovies([...res.results])
                console.log(movies)
            })
            .catch(err=>console.log(err))
        

    }

    return (
        <form action="" className="form" onSubmit={handleSubmit}>
            <label htmlFor="query" className="label">Movie Name</label>
            <input 
                type="text" 
                className="input" 
                name="query" 
                placeholder="i.e Forest Gump"
                value={query}
                onChange={handleChange}
                />
            <button className="button" type="submit">Search</button>
        </form>
    )
}
