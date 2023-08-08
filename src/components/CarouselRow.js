import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled  from "styled-components"


const Img = styled.img`

width: 150px;
height: 200px;
`

const Carousel = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
  
    const apiKey = '36efe0d0ac5c3294162441eb991f9043';
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&append_to_response=videos`;

    axios.get(url)
    .then(response => {
        
        setMovies(response.data.results);
      })
      .catch(error => {
        console.error('Error fetching movie data:', error);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div>
      <h1>Popular Movies Carousel</h1>
      <Slider {...settings}>
        {movies.map(movie => (
          <div key={movie.id}>
            <Img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <h3>{movie.title}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;

