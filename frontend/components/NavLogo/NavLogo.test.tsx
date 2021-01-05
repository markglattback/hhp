import NavLogo from './index';
import { render, screen } from 'test-utils';

test('it renders correctly', () => {
  render(<NavLogo path="/hip-hop-pop.png" />);

  expect(screen.getByAltText('Hip Hop Pop Logo')).toBeTruthy();
})