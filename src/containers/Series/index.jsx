import { useState } from 'react';
import { useEffect } from 'react';

import { BasePage } from '../../components/BasePage';
import {
  getPopularSeries,
  getSeriesToday,
  getTopSeries
} from '../../services/getData';

export const Series = () => {
  const [topSeries, setTopSeries] = useState();
  const [seriesPopular, setSeriesPopular] = useState();
  const [seriesToday, setSeriesToday] = useState();

  const title = {
    firstTitle: 'Séries Populares',
    secondTitle: 'Séries Do Dia'
  };

  useEffect(() => {
    async function getSeries() {
      Promise.all([getTopSeries(), getPopularSeries(), getSeriesToday()])
        .then(([topSeries, popularSeries, seriesToday]) => {
          (setTopSeries(topSeries),
            setSeriesPopular(popularSeries),
            setSeriesToday(seriesToday));
        })
        .catch((err) => console.err(err));
    }
    getSeries();
  }, []);

  return (
    <>
      {topSeries && (
        <BasePage
          mainData={topSeries[0]}
          secondData={seriesPopular}
          thirdData={seriesToday}
          title={title}
        />
      )}
    </>
  );
};
