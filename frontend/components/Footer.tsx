import Link from "next/link";
import styled from "styled-components"
import { Url } from "url";

const FooterWrapper = styled.footer`
  color: var(--grey);
  border-top: 3px solid var(--grey);
  padding: 1.5rem 0;

  div.links {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    margin: 0 0.5rem;
  }

  div.category-name {
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 0.06em;

    @media (max-width: 480px) {
      font-size: 1rem;
    }
  }

  div.category-links {
    font-weight: 300;
    font-size: 12px;
    letter-spacing: 0;

    ul {
      display: flex;
      flex-direction: column;
      padding: 0;
    }

    li {
      list-style: none;
      margin: 0.25rem 0;
    }
  }
`;

export type LinkObject = {
  linkText: string;
  linkRef: linkRef;
}

export type linkRef = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
  internalName: string;
} & ({
    _type: 'linkInternal',
    slug: {
      _type: string;
      current: string;
    };
} | {
  _type: 'linkExternal',
  url: string;
})

export type Category = {
  categoryName: string;
  links: LinkObject[];
}

type FooterProps = {
  categories: Category[]
}


export default function Footer ({ categories }: FooterProps) {
  return (
    <FooterWrapper>
      <div className="links">
        {categories.map(category => {
          return (
            <div className="category">
              <div className="category-name">{category.categoryName}</div>
              <div className="category-links">
                <ul>
                  {category.links.map(link => {
                    const { linkRef, linkText } = link;
                    
                    // internal links
                    if (linkRef._type === 'linkInternal') return <li key={linkRef._id}><Link href={linkRef.slug.current}><a>{linkText}</a></Link></li>;
                    
                    // external links
                    return <li key={linkRef._id}><a href={linkRef.url}>{linkText}</a></li>
                  })}
                </ul>
              </div>
            </div>
          )
        })}
      </div>
    </FooterWrapper>
  )
}