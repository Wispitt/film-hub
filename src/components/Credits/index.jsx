import { getImage } from '../../utils/baseUrlImage';
import { Container, Title } from './styles';

export const Credits = ({ credit }) => {
  return (
    <>
      <Title>Créditos</Title>

      {credit && (
        <Container>
          {credit.slice(0, 5).map((artist) => (
            <div key={artist.id}>
              <img src={getImage(artist.profile_path)} />
              <p> {artist.original_name} </p>
            </div>
          ))}
        </Container>
      )}
    </>
  );
};
