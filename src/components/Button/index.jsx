import { ButtonRed, Container, ButtonWhite } from './styles';

export const Button = ({ children, buttonPrimary }) => {
  return (
    <Container>
      {buttonPrimary ? (
        <ButtonRed> {children} </ButtonRed>
      ) : (
        <ButtonWhite> {children} </ButtonWhite>
      )}
    </Container>
  );
};
