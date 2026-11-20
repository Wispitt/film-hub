import styled, { keyframes } from 'styled-components';

const scale = keyframes`
from {
  transform: scale(0.9);
}
to {
  transform: scale(1);
}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: transform 0.4s ease;
  padding-top: 6px;

  &:hover {
    transform: translateY(-6px);
  }
`;

export const ImageMovies = styled.img`
  border-radius: 30px;
  width: 300px;
  height: 100%;
  animation: ${scale} 0.7s ease-in;
`;

export const MoviesName = styled.p`
  color: #ffffff;
  margin-top: 15px;
`;
