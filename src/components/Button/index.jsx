import { ButtonRed, ButtonWhite } from './styles';

export const Button = ({ children, buttonPrimary }) => {
  return (
    <>
      {buttonPrimary ? (
        <ButtonRed> {children} </ButtonRed>
      ) : (
        <ButtonWhite> {children} </ButtonWhite>
      )}
    </>
  );
};
