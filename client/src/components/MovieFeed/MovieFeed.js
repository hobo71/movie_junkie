import React from "react";
import MovieItem from "./MovieItem/MovieItem";
import { Row } from "reactstrap";
import PropTypes from "prop-types";

const MovieFeed = props => {
  const { movies } = props;
  const movieContent = movies.map(movie => (
    <MovieItem
      key={movie.id + Math.random() * 10000}
      movie={movie}
      {...props}
    />
  ));
  return <Row>{movieContent}</Row>;
};

MovieFeed.propTypes = {
  movies: PropTypes.array.isRequired
};
export default MovieFeed;
