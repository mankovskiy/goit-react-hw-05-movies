import styled from 'styled-components';

export const MovieGallery = styled.ul`
  display: block;
  text-align: center;
  @media screen and (min-width: 769px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;
  }
`;

export const CardTitle = styled.p`
  color: white;
  text-align: center;
  margin-top: 10px;
`;
