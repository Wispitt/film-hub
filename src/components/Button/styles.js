import styled, { css } from 'styled-components';

export const Container = styled.div`
  cursor: pointer;
`;

const buttonStyles = css`
  border: 3px solid #ffffff;
  background: transparent;
  color: #ffffff;
  border-radius: 30px;
  padding: 10px 20px;
  font-size: 20px;
  font-weight: 600;
`;

export const ButtonWhite = styled.div`
  ${buttonStyles}

  &:hover {
    animation: button2 1s ease-in-out infinite alternate;

    @keyframes button2 {
      0% {
        box-shadow: 0px 0px 7px 3px rgba(255 255 255 / 30%);
      }
      100% {
        box-shadow: 0px 0px 7px 6px rgba(255 255 255 / 30%);
      }
    }
  }
`;

export const ButtonRed = styled.div`
  ${buttonStyles}
  color: #ffffff;
  background: #ff0000;
  border: 4px solid transparent;
  box-shadow: 0px 0px 7px 5px rgba(255 0 0 / 30%);

  &:hover {
    color: #ff0000;
    background-color: #ffffff;
    background-color: #ff0000;
    color: #ffffff;
    animation: button 1s ease-in-out infinite alternate;

    @keyframes button {
      0% {
        box-shadow: 0px 0px 7px 5px rgba(255 0 0 / 30%);
      }
      100% {
        box-shadow: 0px 0px 7px 12px rgba(255 0 0 / 30%);
      }
    }
  }
`;
