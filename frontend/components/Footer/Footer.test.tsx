import Footer, { Category, LinkObject } from '.';
import { mockedRouter, render, screen } from 'test-utils';
import { v4 as uuid } from 'uuid';
import userEvent from '@testing-library/user-event';

window.scrollTo = jest.fn();

// Helpers

function generateMockLink(text: string, href: string, type: 'internal' | 'external'): LinkObject {
  type LinkType = {
    _type: 'linkInternal';
    slug: {
      _type: 'slug';
      current: string;
    }
  } | {
    _type: 'linkExternal',
    url: string;
  }

  const linkObj: LinkType = type === 'internal'
    ? { _type: 'linkInternal', slug: { _type: 'slug', current: href } }
    : { _type: 'linkExternal', url: href }

  return {
    linkText: text,
    linkRef: {
      _createdAt: Date.now().toString(),
      _updatedAt: Date.now().toString(),
      _rev: '1',
      _id: uuid(),
      internalName: text,
      ...linkObj
    }
  }
}

function getAllLinks(categories: Category[]): LinkObject[] {
  return categories.map(category => category.links).flat();
}

function getTotalNumberOfLinks(links: LinkObject[]): number {
  return links.length;
}

function getNumberOfExternalLinks(links: LinkObject[]): number {
  return links.filter(link => link.linkRef._type === 'linkExternal').length;
}

function getNumberOfInternalLinks(links: LinkObject[]): number {
  return links.filter(link => link.linkRef._type === 'linkInternal').length;
}

const mockURLs = {
  catergoryOneExternalLink: `https://${uuid()}.com`,
  catergoryTwoExternalLink: `https://${uuid()}.com`,
}

// Mock Data

const categories: Category[] = [
  {
    _id: uuid(),
    categoryName: 'Category One',
    links: [
      generateMockLink('linkOne', '/internalLinkOne', 'internal'),
      generateMockLink('linkTwo', '/internalLinkTwo', 'internal'),
      generateMockLink('linkThree', mockURLs['catergoryOneExternalLink'], 'external'),
    ]
  },
  {
    _id: uuid(),
    categoryName: 'Category Two',
    links: [
      generateMockLink('twoLinkOne', '/twoInternalLinkOne', 'internal'),
      generateMockLink('twoLinkTwo', '/twoInternalLinkTwo', 'internal'),
      generateMockLink('twoLinkThree', mockURLs['catergoryTwoExternalLink'], 'external'),
    ]
  },
]



// Tests
test('it should render correctly', () => {
  render(<Footer categories={categories} />);

  expect(screen.getByTestId('footer')).toBeInTheDocument();
  expect(screen.getAllByTestId('footer-category')).toHaveLength(2);
  expect(screen.getAllByRole('link')).toHaveLength(getTotalNumberOfLinks(getAllLinks(categories)));
  expect(screen.getAllByTestId('footer-external-link')).toHaveLength(getNumberOfExternalLinks(getAllLinks(categories)));
  expect(screen.getAllByTestId('footer-internal-link')).toHaveLength(getNumberOfInternalLinks(getAllLinks(categories)));

  expect(screen.getByText('linkOne')).toHaveAttribute('href', '/internalLinkOne');
  expect(screen.getByText('twoLinkOne')).toHaveAttribute('href', '/twoInternalLinkOne');
  expect(screen.getByText('linkThree')).toHaveAttribute('href', mockURLs['catergoryOneExternalLink']);
});

test('the internal links function properly', () => {
  render(<Footer categories={categories} />);

  const push = jest.spyOn(mockedRouter, 'push');

  userEvent.click(screen.getByText('twoLinkTwo'));
  expect(push).toHaveBeenCalledWith('/twoInternalLinkTwo', '/twoInternalLinkTwo', { locale: undefined, scroll: true, shallow: undefined });
});
