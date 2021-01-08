import styled from 'styled-components';

export const Main = styled.main`
  grid-area: content;
  padding-top: 54px;
  text-align: center;
  flex: 1 0 auto;
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-template-areas: "content";
  flex: 1 0 auto;
`;