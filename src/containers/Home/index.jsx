import { useState } from 'react';
import { useEffect } from 'react';

import { Button } from '../../components/Button';
import { api } from '../../services/apiTheMovies';
import {
  Backgound,
  Info,
  MovieImage,
  Contant,
  ContainerButtons
} from './styles';

export const Home = () => {
  const [moviesData, setMoviesData] = useState();

  useEffect(() => {
    async function getMovies() {
      try {
        const {
          data: { results }
        } = await api.get('/movie/popular');
        setMoviesData(results[10]);
      } catch (err) {
        console.log(err);
      }
    }
    getMovies();
  }, []);
  console.log(moviesData);
  return (
    <>
      {moviesData && (
        <Backgound
          urlImage={`https://image.tmdb.org/t/p/original${moviesData.backdrop_path}`}
        >
          <Contant>
            <Info>
              <h1> {moviesData.title} </h1>
              <p> {moviesData.overview} </p>
              <ContainerButtons>
                <Button buttonPrimary>Assistir agora</Button>
                <Button>Assistir o Trailer</Button>
              </ContainerButtons>
            </Info>

            <MovieImage>
              <img
                src={`https://image.tmdb.org/t/p/original${moviesData.poster_path}`}
                alt="capa-do-filme"
              />
            </MovieImage>
          </Contant>
        </Backgound>
      )}
    </>
  );
};
