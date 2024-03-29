import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 15px;
`;

export const Title = styled.h1`
  margin-bottom: 12px;
  text-align: center;
`;
export const TitleCard = styled.h1`
  margin-bottom: 12px;
  text-align: center;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 12px;
  padding: 8px 0;

  margin-bottom: 16px;
  border-bottom: 1px solid black;

  > nav {
    display: flex;
  }
`;

export const Logo = styled.p`
  font-weight: 700;
  margin: 0;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
`;
