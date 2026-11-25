import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';

import { Credits } from '../../components/Credits';
import { Slider } from '../../components/Slider';
import { SpanGenres } from '../../components/SpanGenres';
import {
  getMovieById,
  getMovieCredits,
  getMovieSimilar,
  getMovieVideos
} from '../../services/getData';
import { getImage } from '../../utils/baseUrlImage';
import { getVideo } from '../../utils/baseUrlYoutube';
import { Container, Background, Cover, Info, ContainerMovies } from './styles';

export const Detail = () => {
  const [movieData, setMovieData] = useState();
  const [movieVideos, setMovieVideos] = useState();
  const [movieCredit, setMovieCredit] = useState();
  const [movieSimilar, setMovieSimilar] = useState();

  const { id } = useParams();

  useEffect(() => {
    async function getAllMovies() {
      Promise.all([
        getMovieById(id),
        getMovieVideos(id),
        getMovieCredits(id),
        getMovieSimilar(id)
      ])
        .then(([movies, videos, credit, similar]) => {
          setMovieData(movies);
          setMovieVideos(videos);
          setMovieCredit(credit);
          setMovieSimilar(similar);
        })
        .catch((err) => console.err(err));
    }

    getAllMovies();
  }, [id]);

  return (
    <>
      {movieData && (
        <>
          <Background $image={getImage(movieData.backdrop_path)} />
          <Container>
            <Cover>
              <img src={getImage(movieData.poster_path)} />
            </Cover>

            <Info>
              <h2> {movieData.title} </h2>
              <SpanGenres genres={movieData.genres} />
              <p> {movieData.overview} </p>
              <div>
                <Credits credit={movieCredit} />
              </div>
            </Info>
          </Container>

          <ContainerMovies>
            {movieVideos &&
              movieVideos.map((video) => (
                <div key={video.id}>
                  <h3> {video.name} </h3>
                  <iframe
                    src={getVideo(video.key)}
                    title={video.title}
                    height="500px"
                    width="100%"
                  ></iframe>
                </div>
              ))}
          </ContainerMovies>

          <div>
            {movieSimilar && <Slider info={movieSimilar} title="Similares" />}
          </div>
        </>
      )}
    </>
  );
};
