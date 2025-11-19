import axios from 'axios'
import React, { useState } from 'react'

const Add = () => {
    const [movie,SetMovie] = useState({
        title:"",
        year:"",
        plot:"",
    })
    const addmovie = async (e) =>{
        e.preventDefault();
        var check = await axios.post("http://localhost:5000/movie/Addmovie",movie);
    }
  return (
    <>
    <form>
        <input type='text' value={movie.title} onChange={(e)=>SetMovie({...movie,title: e.target.value})}></input>
        <input type = 'number' value = {movie.year} onChange={(e)=> SetMovie({...movie,year : e.target.value})}></input>
        <input type='text' value={movie.plot} onChange={(e)=>{SetMovie({...movie,plot : e.target.value})}}></input>
        <button onClick={addmovie} >Add</button>
    </form>
    </>
  )
}

export default Add