import userEvent from '@testing-library/user-event'
import { mockedRouter, render, screen } from 'test-utils';
import { useState } from 'react';
import NavLink from './index';

window.scrollTo = jest.fn();

const text = 'Dance Classes';
const href = '/test';

// Nav Mock
function NavBar() {
  const [open, setOpen] = useState(true);

  return (
    <nav>
      <NavLink text={text} setOpen={() => setOpen(false)} href={href} />
    </nav>
  )
}

test('displays correctly', () => {
  render(<NavBar />);

  const link = screen.getByRole('link');

  expect(link).toHaveTextContent(text);
  expect(link).toHaveAttribute('href', href);
});

test('pushes new route correctly', () => {
  render(<NavBar />);

  const link = screen.getByRole('link');
  const push = jest.spyOn(mockedRouter, 'push');

  userEvent.click(link, { button: 0 });
  expect(push).toHaveBeenCalledWith(href, href, { locale: undefined, shallow: undefined });
});

