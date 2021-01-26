import styled from 'styled-components';

export default styled.li`
  display: flex;
  position: relative;
  cursor: pointer;

  &:before {
    content: "";
    display: inline-block;
    align-self: stretch;
    width: 1px;
    background: var(--white);

    @media (max-width: 830px) {
      display: none;
    }
  }

  span {
    display: none;
    margin: 0 1rem;
    line-height: 2.25;
    text-transform: uppercase;
    text-decoration: none;
    white-space: nowrap;
  
    @media (max-width: 1280px) {
      display: block;
    }

    @media (max-width: 830px) {
      display: none;
    }
  }

  &:hover > .dropdown-wrapper {
    @media (max-width: 1280px) {
      display: block;

      
    }
  }
 
  .dropdown-wrapper {
    @media (max-width: 1280px) {
      display: none;
      position: absolute;
      transform: translateY(2rem);
      background: var(--white);
      color: var(--black);

      ul {
        display: flex;
        flex-direction: column;
        margin-top: 0;

        li:hover {
          color: var(--white);
        }
        
        a:before {
          display: none;
        }
      }
    }

    @media (max-width: 830px) {
      display: block;
      position: initial;
      background: transparent;
      color: var(--white);
      transform: translateY(0);
    }
  }


  ul {
    li:hover,
    li.active {
      background: var(--activeLink);
    }

    li:hover {
      transition-duration: 0.3s;
    }
  }

`;