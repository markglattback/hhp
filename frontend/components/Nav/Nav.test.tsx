import Nav from './index';
import { act, cleanup, render, screen, waitFor } from 'test-utils';
import wait from 'waait';
import { fireEvent } from '@testing-library/react';

afterEach(() => {
  cleanup();
})

test('it renders correctly', () => {
  render(<Nav />);
  expect(screen.getByAltText('Hip Hop Pop Logo')).toBeTruthy();
  expect(screen.getByRole('navigation')).toHaveClass('no-transition');
});

test('useEffect removes class correctly', () => {
  // simulate rendering on mobile
  global.innerWidth = 700;
  render(<Nav />);
  expect(screen.getByRole('navigation')).not.toHaveClass();
  cleanup();

  // simulate rendering on desktop
  global.innerWidth = 701;
  render(<Nav />);
  expect(screen.getByRole('navigation')).toHaveClass('no-transition');

  // resize to sub-700px widths
  global.innerWidth = 400;
  window.dispatchEvent(new Event('resize'));
  expect(screen.getByRole('navigation')).not.toHaveClass();



});