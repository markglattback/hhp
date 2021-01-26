import Link from "next/link";
import Container from "styles/styled components/Container";
import StyledFooter from './styles';

export type LinkObject = {
  linkText: string;
  linkRef: LinkRef;
}

export type LinkRef = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
  internalName: string;
} & ({
  _type: 'linkInternal',
  slug: {
    _type: 'slug';
    current: string;
  };
} | {
  _type: 'linkExternal',
  url: string;
})

export type Category = {
  _id: string;
  categoryName: string;
  links: LinkObject[];
}

type FooterProps = {
  categories: Category[]
}


export default function Footer({ categories }: FooterProps) {
  return (
    <StyledFooter data-testid="footer">
      <div className="grid-frame-max">
        <div className="grid">
          {categories.map((category, index) => {
            const offset = index % 2 === 0;
            return (
              <div className={`category cell medium-4 large-3 ${offset ? "offset medium-offset-2 large-offset-auto" : ""}`} data-testid="footer-category" key={category._id}>
                <div className="category-name">{category.categoryName}</div>
                <div className="category-links">
                  <ul>
                    {category.links && category.links.map(link => {
                      const { linkRef, linkText } = link;

                      // internal links
                      if (linkRef._type === 'linkInternal') return <li key={linkRef._id}><Link href={linkRef.slug.current}><a data-testid="footer-internal-link">{linkText}</a></Link></li>;

                      // external links
                      return <li key={linkRef._id}><a href={linkRef.url} data-testid="footer-external-link">{linkText}</a></li>
                    })}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </StyledFooter>
  )
}