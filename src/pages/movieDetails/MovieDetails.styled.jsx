import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  margin-bottom: 24px;
  color: black;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: gray;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const MovieItem = styled.li`
  display: inline-block;
  padding-bottom: 10px;
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  @media screen and (min-width: 769px) {
    flex-basis: calc((100% - 30px) / 2);
  }
  @media screen and (min-width: 1200px) {
    flex-basis: calc((100% - 30px) / 3);
  }
`;

export const Img = styled.img`
  @media screen and (min-width: 769px) {
    max-width: 370px;
  }
`;
export const Main = styled.main`
  /* padding-top: 60px; */
  padding-bottom: 60px;
`;
export const Wrapper = styled.div`
  display: block;
  @media screen and (min-width: 769px) {
    display: flex;
  }
`;

export const Info = styled.div`
  margin-left: 60px;
`;
export const MoreInfo = styled.ul`
  margin-top: 48px;
`;
