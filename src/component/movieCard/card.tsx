import * as React from 'react';
import { useState, useEffect} from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {Button, Box, Grid} from '@mui/material';
import Typography from '@mui/material/Typography';

export default function MovieCard() {
  const[movies, setMovies] = useState([]);

  const getMovies = async()=>{
    try{
      const res = await axios.get("http://localhost:8009/movies");
      console.log("===movie", res.data.movies);
      setMovies(res.data.movies)
    }catch(err){
      console.log("ERR", err);
    }

  }

useEffect(()=>{
  getMovies();
}, []);


  return (
    <>
    <Box>
      <Grid container spacing={1}>
        
    {movies.map(({title, poster, plot, type})=>
    <Grid item xs={12} sm={6}  md={4} lg={3}>
       <Card sx={{ maxWidth: 345 , height: 450}}>   
       <CardMedia
         component="img"
         alt="green iguana"
         height="250"
         image={poster}
       />
       <CardContent>
         <Typography gutterBottom variant="h5" component="div">
           {title}
         </Typography>
         <Typography variant="body2" color="text.secondary">
           {plot}
         </Typography>
       </CardContent>
       <CardActions>
         <Button size="small">Share</Button>
       </CardActions>
     </Card>
     </Grid>
     )}
     </Grid>
     </Box>
    </>
   
  );
}