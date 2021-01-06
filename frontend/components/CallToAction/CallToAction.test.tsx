import CallToAction, { CallToActionProps, LinkButton } from '.';
import { mockedRouter, render, screen } from 'test-utils';
import userEvent from '@testing-library/user-event';

window.scrollTo = jest.fn();

const props: CallToActionProps = {
  firstLine: 'This is first line',
  secondLine: 'of a two line headline',
  buttonOneText: 'This is Button One',
  buttonOneLink: '/button-one',
  buttonTwoText: 'This is Button Two',
  buttonTwoLink: '/button-two',
}

const { buttonOneLink, buttonOneText, buttonTwoLink, buttonTwoText, firstLine, secondLine } = props;

test('it should render correctly', () => {
  render(<CallToAction {...props} />);

  // Text displays correctly
  expect(screen.getAllByTestId('call-to-action')).toBeInTheDocument();
  expect(screen.getByTestId('cta-first-line')).toHaveTextContent(firstLine);
  expect(screen.getByTestId('cta-second-line')).toHaveTextContent(secondLine as string);

  // Links display correctly
  const links = screen.getAllByRole('link');
  expect(links).toHaveLength(2);
  expect(links[0]).toHaveTextContent(buttonOneText);
  expect(links[0]).toHaveAttribute('href', buttonOneLink)
  expect(links[1]).toHaveTextContent(buttonTwoText);
  expect(links[1]).toHaveAttribute('href', buttonTwoLink)

});

test('links should work correctly', () => {
  render(<CallToAction {...props} />);

  // links function correctly
  const links = screen.getAllByRole('link');
  const push = jest.spyOn(mockedRouter, 'push');

  userEvent.click(links[0]);
  expect(push).toHaveBeenCalledWith(buttonOneLink, buttonOneLink, { locale: undefined, shallow: undefined });

  userEvent.click(links[1]);
  expect(push).toHaveBeenCalledWith(buttonTwoLink, buttonTwoLink, { locale: undefined, shallow: undefined });

});