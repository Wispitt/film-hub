import { useEffect } from 'react';
import { useState } from 'react';
import { MdClose } from 'react-icons/md';

import { getMovieVideos } from '../../services/getData';
import { getVideo } from '../../utils/baseUrlYoutube';
import { Container, Background } from './styles';

export const Modal = ({ movie, setShowModal }) => {
  const [moviesData, setMovieData] = useState();

  useEffect(() => {
    async function getMovies() {
      setMovieData(await getMovieVideos(movie.id));
    }
    getMovies();
  }, [movie]);

  return (
    <>
      {moviesData && (
        <Background onClick={() => setShowModal(false)}>
          <Container>
            <MdClose className="close" onClick={() => setShowModal(false)} />
            <iframe
              src={getVideo(moviesData.key)}
              title={movie.title}
              height="500px"
              width="100%"
            ></iframe>
          </Container>
        </Background>
      )}
    </>
  );
};
