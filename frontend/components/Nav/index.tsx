import { useState } from "react";
import NavCategory from '../NavCategory';
import NavLink from '../NavLink';
import NavToggle from '../NavToggle';
import Header from './styles';

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Header open={open}>
        <nav>
          <div className="brand-logo">
            <img src="/hhp-logo.png" alt="Hip Hop Pop Logo" />
          </div>
          <ul>
            <NavLink
              href="street-dance-facts"
              text="News"
              setOpen={setOpen} />
            <NavCategory name="Dance Schools">
              <NavLink
                href="street-dance-classes/schools/harlow"
                text="Harlow Dance School"
                setOpen={setOpen}
              />
              <NavLink
                href="street-dance-classes/schools/bishops-stortford"
                text="Stortford Dance School"
                setOpen={setOpen}
              />
            </NavCategory>
            <NavCategory name="Dance Classes">
              <NavLink
                href="kids-street-dance-classes-for-kids"
                text="Kids Classes"
                setOpen={setOpen}
              />
              <NavLink
                href="street-dance-classes-for-adults"
                text="Adult Classes"
                setOpen={setOpen}
              />
            </NavCategory>
            <NavLink
              href="dance-workshops-in-schools-primary"
              text="In Schools"
              setOpen={setOpen}
            />
            <NavLink
              href="street-dance-events-uk"
              text="Events"
              setOpen={setOpen} />
            <NavLink
              href="contact-us-street-dance-classes"
              text="Contact"
              setOpen={setOpen} />
            <NavLink
              href="shop-merchandise-street-dance-wear"
              text="Shop"
              setOpen={setOpen} />
          </ul>
        </nav>
      </Header>
      <NavToggle open={open} setOpen={setOpen} />
    </>
  );
}
