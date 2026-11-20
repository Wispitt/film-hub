import styled from 'styled-components';

export const Background = styled.div`
  width: 99vw;
  height: 99vh;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.65);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;

  .close {
    color: #ffffff;
    position: absolute;
    right: 10px;
    top: 8px;
    font-size: 29px;
    padding: 1px;
    border-radius: 100%;
    cursor: pointer;

    &:hover {
      background-color: #474747;
    }
  }
`;

export const Container = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  max-width: 1300px;
  padding: 40px;

  iframe {
    border: none;
    border-radius: 20px;
  }
`;
