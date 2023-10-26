import React, { useState } from "react";
import { MovieContainer, MovieImg, MovieInfo, MovieTitle, MovieRating, MovieDescription, Overview } from './Movie.style';

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

export default function Movie({ title, poster_path, vote_average, overview }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <MovieContainer
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <MovieImg src={IMG_BASE_URL + poster_path} alt="영화포스터" />
      <MovieInfo>
        <MovieTitle>{title}</MovieTitle>
        <MovieRating>{vote_average}</MovieRating>
        {isHovered && (
          <Overview>
            <MovieDescription><br/>
              <h4>{title}</h4><br/>{overview}</MovieDescription>
          </Overview>
        )}
      </MovieInfo>
    </MovieContainer>
  );
}
