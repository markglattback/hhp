import * as React from 'react';
import StyledNavCategory from './styles';

type NavCategoryProps = {
  name: string;
  children: JSX.Element[];
}

export default function NavCategory({ name, children }: NavCategoryProps) {
  return (
    <StyledNavCategory className="nav-category">
      <span>{name}</span>
      <div className="dropdown-wrapper">
        <ul>
          {children.map((link, index) => {
            return React.cloneElement(
              link,
              { ...link.props, role: "menuitem", key: `${name}-${index}` },
              null
            );
          })}
        </ul>
      </div>
    </StyledNavCategory>
  )
}