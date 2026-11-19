import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router';

import logoAndName from '../../assets/logo-and-name.png';
import { Container, ContantLinks, LogoHeader, Li } from './styles';

export const Header = () => {
  const [changeBackground, setChangeBackground] = useState();

  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (!changeBackground && window.scrollY > 150) {
        setChangeBackground(true);
      }
      if (changeBackground && window.scrollY <= 150) {
        setChangeBackground(false);
      }
    };
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container $changeBackground={changeBackground}>
      <LogoHeader src={logoAndName} alt="logo-do-filmhub" />
      <ContantLinks>
        <Li $isActive={pathname === '/'}>
          <Link to="/">Home</Link>
        </Li>

        <Li $isActive={pathname.includes('filmes')}>
          <Link to="/filmes">Filmes</Link>
        </Li>

        <Li $isActive={pathname.includes('series')}>
          <Link to="/series">Séries</Link>
        </Li>
      </ContantLinks>
    </Container>
  );
};
