import * as nextRouter from 'next/router';
import { render, screen } from 'test-utils';
import { useState } from 'react';
import NavLink from './index';

// mock useRouter
jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "",
      pathname: "",
      query: "",
      asPath: ""
    }
  }
}));

const useRouter = jest.spyOn(nextRouter, 'useRouter');

test('displays correctly', () => {
  const text = 'Dance Classes';
  const href = '/test';


  // mock the nav implementation
  function NavBar() {
    const [open, setOpen] = useState(true);

    return (
      <nav>
        <NavLink text={text} setOpen={() => setOpen(false)} href={href} />
      </nav>
    )
  }

  render(<NavBar />);

  const link = screen.getByRole('link');

  expect(link).toHaveTextContent(text);
  expect(link).toHaveAttribute('href', href);
});