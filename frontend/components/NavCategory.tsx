import * as React from 'react';
import styled from 'styled-components';

const NavCatergoryWrapper = styled.li`
  display: flex;
  position: relative;
  cursor: pointer;

  &:before {

      content: "";
    display: inline-block;
    align-self: stretch;
    width: 1px;
    background: var(--white);
  }

  span {
    display: none;
    margin: 0 1rem;
    line-height: 2.25;
    text-transform: uppercase;
    text-decoration: none;
    white-space: nowrap;
  
    @media (max-width: 1050px) {
      display: block;


    }
  }

  &:hover > .dropdown-wrapper {
    @media (max-width: 1050px) {
      display: block;

      
    }
  }
 
  .dropdown-wrapper {
    @media (max-width: 1050px) {
      display: none;
      position: absolute;
      transform: translateY(2rem);
      background: var(--white);
      color: var(--black);

      ul {
        display: flex;
        flex-direction: column;

        li:hover {
          color: var(--white);
        }
        
        a:before {
          display: none;
        }
      }
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

type NavCategoryProps = {
  name: string;
  children: JSX.Element[];
}

export default function NavCategory({ name, children }: NavCategoryProps) {
  return (
    <NavCatergoryWrapper className="nav-category">
      <span>{name}</span>
      <div className="dropdown-wrapper">
        <ul role="group">
          {children.map((link, index) => {
            return React.cloneElement(
              link,
              { ...link.props, role: "menuitem", key: `${name}-${index}` },
              null
            );
          })}
        </ul>
      </div>
    </NavCatergoryWrapper>
  )
}