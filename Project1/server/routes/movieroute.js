const express = require('express');
const Movie = require('../model/movie.js');

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    console.log('inside')
    const movies = await Movie.find();  
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/Addmovie',async (req,res)=>{
  try {
    var movie = new Movie(req.body);
    await movie.save();
  } catch (error) {
    
  }
})

module.exports = router;
