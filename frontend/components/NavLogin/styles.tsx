import styled from 'styled-components';

export default styled.a`
  display: flex;
  background: var(--yellow);
  color: var(--black);
  text-decoration: none;
  text-transform: uppercase;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: 0.1s ease-in;

  &:hover {
    background: var(--black);
    color: var(--yellow);
    box-shadow: 0px 0px 0px 2px var(--yellow);
  }
`