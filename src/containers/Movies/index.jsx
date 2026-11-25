import { useEffect } from 'react';
import { useState } from 'react';

import { BasePage } from '../../components/BasePage';
import { getMovies, getTopMovies } from '../../services/getData';

export const Movies = () => {
  const [topMovies, setTopMovies] = useState();
  const [movies, setMovies] = useState();

  const title = {
    firstTitle: 'Top Filmes',
    secondTitle: 'Filmes'
  };

  useEffect(() => {
    async function getAllMovies() {
      Promise.all([getMovies(), getTopMovies()])
        .then(([movies, topMovies]) => {
          setMovies(movies);
          setTopMovies(topMovies);
        })
        .catch((err) => console.err(err));
    }
    getAllMovies();
  }, []);

  return (
    <>
      {topMovies && (
        <BasePage
          mainData={movies[2]}
          secondData={topMovies}
          thirdData={movies}
          title={title}
        />
      )}
    </>
  );
};
