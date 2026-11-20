import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

import { Button } from '../../components/Button';
import { Modal } from '../../components/Modal';
import { Slider } from '../../components/Slider';
import {
  getMovies,
  getPopularSeries,
  getSeriesToday,
  getTopMovies,
  getTopSeries
} from '../../services/getData';
import { getImage } from '../../utils/baseUrlImage';
import {
  Backgound,
  Info,
  MovieImage,
  Contant,
  ContainerButtons
} from './styles';

export const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [moviesData, setMoviesData] = useState();
  const [moviesTopData, setMoviesTopData] = useState();
  const [seriesTopData, setSeriesTopData] = useState();
  const [seriesPopularData, setSeriesPopularData] = useState();
  const [seriesTodayData, setSeriesTodayData] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    async function getAllMovies() {
      Promise.all([
        getMovies(),
        getTopMovies(),
        getTopSeries(),
        getPopularSeries(),
        getSeriesToday()
      ])
        .then(
          ([
            moviesData,
            moviesTopData,
            seriesTopData,
            seriesPopularData,
            seriesTodayData
          ]) => {
            setMoviesData(moviesData);
            setMoviesTopData(moviesTopData);
            setSeriesTopData(seriesTopData);
            setSeriesPopularData(seriesPopularData);
            setSeriesTodayData(seriesTodayData);
          }
        )
        .catch((err) => console.err(err));
    }

    getAllMovies();
  }, []);

  return (
    <>
      {moviesData && (
        <Backgound $urlImage={getImage(moviesData.backdrop_path)}>
          {showModal && (
            <Modal movie={moviesData} setShowModal={setShowModal} />
          )}
          <Contant>
            <Info>
              <h1> {moviesData.title} </h1>
              <p> {moviesData.overview} </p>
              <ContainerButtons>
                <Button
                  onClick={() => navigate(`/detail/${moviesData.id}`)}
                  buttonPrimary
                >
                  Assistir agora
                </Button>
                <Button onClick={() => setShowModal(true)}>
                  Assistir o Trailer
                </Button>
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
