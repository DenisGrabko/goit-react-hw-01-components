import styled from 'styled-components';
import getRandomHexColor from 'components/random-color';

export const Section = styled('section')`
  display: flex;
  flex-direction: column;
  margin: 20px;
  text-align: center;
`;

export const List = styled('ul')`
  display: flex;
  flex-direction: row;
  gap: 50px;
  justify-content: center;
  list-style: none;
`;

export const Item = styled('li')`
  background-color: ${getRandomHexColor()};
  padding: 50px;
  display: flex;
  flex-direction: column;
`;
