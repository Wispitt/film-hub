import styled from 'styled-components';

export const Backgound = styled.div`
  background-image: url(${(props) => props.$urlImage});
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

export const Contant = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  max-width: 1500px;
`;

export const Info = styled.div`
  z-index: 2;
  padding: 10px 20px;
  width: 50%;

  h1 {
    font-size: 3.6rem;
    max-width: 500px;
    font-weight: 700;
    color: #ffffff;
  }

  p {
    font-size: 1.1rem;
    font-weight: 500;
    color: #ffffff;
    margin: 20px 0 20px 0;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 30px;
`;

export const MovieImage = styled.div`
  z-index: 2;

  img {
    width: 400px;
    border-radius: 30px;
  }
`;
