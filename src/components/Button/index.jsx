import { ButtonRed, Container, ButtonWhite } from './styles';

export const Button = ({ children, buttonPrimary, ...props }) => {
  return (
    <Container>
      {buttonPrimary ? (
        <ButtonRed {...props}> {children} </ButtonRed>
      ) : (
        <ButtonWhite {...props}> {children} </ButtonWhite>
      )}
    </Container>
  );
};
