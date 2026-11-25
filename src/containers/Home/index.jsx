import { useState } from 'react';
import { useEffect } from 'react';

import { BasePage } from '../../components/BasePage';
import {
  getMovies,
  getPopularSeries,
  getSeriesToday,
  getTopMovies,
  getTopSeries
} from '../../services/getData';

export const Home = () => {
  const [moviesData, setMoviesData] = useState();
  const [moviesTopData, setMoviesTopData] = useState();
  const [seriesTopData, setSeriesTopData] = useState();
  const [seriesPopularData, setSeriesPopularData] = useState();
  const [seriesTodayData, setSeriesTodayData] = useState();

  const title = {
    firstTitle: 'Top Filmes',
    secondTitle: 'Top Séries',
    thirdTitle: 'Séries Populares',
    fourthTitle: 'Séries Do Dia'
  };

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
        <BasePage
          mainData={moviesData[0]}
          secondData={moviesTopData}
          thirdData={seriesTopData}
          fifthData={seriesPopularData}
          fourthData={seriesTodayData}
          title={title}
        />
      )}
    </>
  );
};
