import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100px;
  z-index: 99;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => (props.$changeBackground ? '#000' : 'transparent')};
  transition: background-color 1s ease-in-out;
`;

export const LogoHeader = styled.img`
  width: 30%;
  position: relative;
  left: -50px;
`;

export const ContantLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 37px;
  margin-right: 35px;
`;

export const Li = styled.li`
  cursor: pointer;
  font-weight: 600;
  font-size: 21px;
  position: relative;

  a {
    text-decoration: none;
    color: ${(props) => (props.$isActive ? '#840de6' : '#ffffff')};

    &:hover {
      color: #840de6;
    }
  }

  &::after {
    content: '';
    height: 3px;
    width: ${(props) => (props.$isActive ? '100%' : 0)};
    background-color: #840de6;
    position: absolute;
    bottom: -4px;
    left: 50%;
    z-index: 999;
    transform: translateX(-50%);
    transition: width 0.6s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }
`;
