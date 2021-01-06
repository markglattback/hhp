import CallToAction, { CallToActionProps } from '.';
import { render, screen } from 'test-utils';

const fakeCTAProps: CallToActionProps = {
  headline: 'This is the headline',
  buttonOneText: 'This is Button One',
  buttonOneLink: '/button-one',
  buttonTwoText: 'This is Button Two',
  buttonTwoLink: '/button-two',
}

test('it should render correctly', () => {
  render(<CallToAction {...fakeCTAProps} />);

  expect(screen.getByRole('heading')).toHaveTextContent(fakeCTAProps.headline);
});

