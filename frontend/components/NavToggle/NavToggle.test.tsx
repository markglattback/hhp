import { render, screen } from 'test-utils';
import userEvent from '@testing-library/user-event';
import NavToggle from '.';
import { useState } from 'react';

function NavMock() {
  const [open, setOpen] = useState(false);

  return <NavToggle open={open} setOpen={setOpen} />
}

test('it renders correctly', () => {
  render(<NavMock />);
  const toggle = screen.getByTestId('nav-toggle');

  expect(toggle).toBeInTheDocument();

  userEvent.click(toggle, { button: 0 });

  // WARNING: fragile as implementation may change
  expect(screen.getByTestId('nav-toggle-span')).toHaveStyle(`display: block;
    position: relative;
    left: 20px;
    height: 3px;
    width: 24px;
    background: transparent;
    transition: all 0.15s ease-in-out;`
  )

})