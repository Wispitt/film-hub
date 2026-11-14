import styled, { css } from 'styled-components';

const buttonStyles = css`
  border: 3px solid #ffffff;
  background: transparent;
  color: #ffffff;
  border-radius: 30px;
  padding: 10px 20px;
  font-size: 20px;
  font-weight: 600;

  &:hover {
    color: #ff0000;
    background-color: #ffffff;
  }
`;

export const ButtonWhite = styled.div`
  ${buttonStyles}
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
    box-shadow: 0px 0px 7px 12px rgba(255 0 0 / 30%);
    background-color: #ff0000;
    color: #ffffff;
  }
`;
