import { useState } from 'react';
import { useEffect } from 'react';

import { Button } from '../../components/Button';
import { Slider } from '../../components/Slider';
import { api } from '../../services/apiTheMovies';
import { getImage } from '../../utils/baseUrlImage';
import {
  Backgound,
  Info,
  MovieImage,
  Contant,
  ContainerButtons
} from './styles';

export const Home = () => {
  const [moviesData, setMoviesData] = useState();
  const [moviesTopData, setMoviesTopData] = useState();
  const [seriesTopData, setSeriesTopData] = useState();
  const [seriesPopularData, setSeriesPopularData] = useState();
  const [seriesTodayData, setSeriesTodayData] = useState();

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

    async function getTopMovies() {
      try {
        const {
          data: { results }
        } = await api.get('/movie/top_rated');
        setMoviesTopData(results);
      } catch (err) {
        console.log(err);
      }
    }

    async function getTopSeries() {
      try {
        const {
          data: { results }
        } = await api.get('/tv/top_rated');
        setSeriesTopData(results);
      } catch (err) {
        console.log(err);
      }
    }

    async function getPopularSeries() {
      try {
        const {
          data: { results }
        } = await api.get('/tv/popular');
        setSeriesPopularData(results);
      } catch (err) {
        console.log(err);
      }
    }

    async function getSeriesToday() {
      try {
        const {
          data: { results }
        } = await api.get('/tv/airing_today');
        setSeriesTodayData(results);
      } catch (err) {
        console.log(err);
      }
    }

    getMovies();
    getTopMovies();
    getTopSeries();
    getPopularSeries();
    getSeriesToday();
  }, []);

  return (
    <>
      {moviesData && (
        <Backgound $urlImage={getImage(moviesData.backdrop_path)}>
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
              <img src={getImage(moviesData.poster_path)} alt="capa-do-filme" />
            </MovieImage>
          </Contant>
        </Backgound>
      )}

      {moviesTopData && <Slider info={moviesTopData} title="Top Filmes" />}
      {seriesTopData && <Slider info={seriesTopData} title="Top Séries" />}
      {seriesPopularData && (
        <Slider info={seriesPopularData} title="Séries Populares" />
      )}
      {seriesTodayData && (
        <Slider info={seriesTodayData} title="Séries de hoje" />
      )}
    </>
  );
};
