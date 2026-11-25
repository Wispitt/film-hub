import { getImage } from '../../utils/baseUrlImage';
import { Container, ImageMovies, MoviesName } from './styles';

export const Card = ({ item }) => {
  return (
    <Container>
      {item.poster_path ? (
        <ImageMovies src={getImage(item.poster_path)} alt="capa-do-filme" />
      ) : (
        <div>
          <p>Imagem não encontrada</p>
        </div>
      )}

      <MoviesName>
        {item.title || item.name || 'Nome não encontrado'}
      </MoviesName>
    </Container>
  );
};
