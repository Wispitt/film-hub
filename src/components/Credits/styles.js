import styled from 'styled-components';

export const Title = styled.h3`
  color: #ffffff;
  font-size: 28px;
  font-weight: 700;
  margin: 4px 0 -18px;
`;

export const Container = styled.div`
  display: flex;
  margin-top: 30px;
  gap: 10px;

  div {
    display: flex;
    flex-direction: column;
  }

  p {
    color: #ffffff;
  }

  img {
    height: 200px;
    border-radius: 20px;
    box-shadow: rgb(255 255 2555 / 30%) 0px 0px 50px 4px;
  }
`;
