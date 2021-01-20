import Nav from './index';
import { render, screen } from 'test-utils';

test('it renders correctly', () => {
  render(<Nav />);

  expect(screen.getByTestId('header')).toBeInTheDocument();
  expect(screen.getByTestId('nav-logo')).toBeInTheDocument();
  expect(screen.getByTestId('nav')).toBeInTheDocument();
  expect(screen.getByTestId('nav-toggle')).toBeInTheDocument();
});

test('nav useEffect removes class correctly', () => {
  // simulate rendering collapsed version of nav
  global.innerWidth = 700;
  const { unmount } = render(<Nav />);
  expect(screen.getByTestId('nav')).not.toHaveClass();
  unmount();

  // simulate rendering expanded version of nav
  global.innerWidth = 701;
  render(<Nav />);
  expect(screen.getByTestId('nav')).toHaveClass('no-transition');

  // resize to sub-700px widths to trigger collapse
  global.innerWidth = 400;
  window.dispatchEvent(new Event('resize'));
  expect(screen.getByTestId('nav')).not.toHaveClass();

  // and resize back up again
  global.innerWidth = 800;
  window.dispatchEvent(new Event('resize'));
  expect(screen.getByTestId('nav')).toHaveClass('no-transition');
});

// not possible to test as implementation controls visibility
// with css media queries and these aren't computed
// TODO: implement with Cypress
// test('collapsed nav opens and closes correctly when toggled', () => {

// })