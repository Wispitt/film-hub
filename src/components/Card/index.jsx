import { getImage } from '../../utils/baseUrlImage';
import { Container, ImageMovies, MoviesName } from './styles';

export const Card = ({ item }) => {
  return (
    <Container>
      <ImageMovies src={getImage(item.poster_path)} alt="capa-do-filme" />
      <MoviesName>
        {item.title || item.name || 'Nome não encontrado'}
      </MoviesName>
    </Container>
  );
};
