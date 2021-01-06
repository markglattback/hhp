import React, { ReactNode } from 'react';
import { render, RenderOptions, RenderResult, Queries } from '@testing-library/react';
import '@testing-library/jest-dom';
import { RouterContext } from 'next/dist/next-server/lib/router-context'
import { NextRouter } from 'next/router';

type CustomRendererOptions = RenderOptions<Queries>;

export const mockedRouter: NextRouter = {
  asPath: '',
  basePath: '',
  pathname: '',
  query: {},
  route: '',
  back: jest.fn(),
  push: (path) => {
    const pushed = jest.fn();
    pushed(path);
    return new Promise((resolve, reject) => resolve(true));
  },
  replace: jest.fn(),
  reload: jest.fn(),
  beforePopState: jest.fn(),
  prefetch: () => new Promise((resolve, reject) => { }),
  events: {
    emit: jest.fn(),
    on: jest.fn(),
    off: jest.fn()
  },
  isFallback: false
}

export const leftClickConfig = { button: 0 };


// add all application context providers in here 
// as and when they get added to the app
const AllAppProviders = ({ children }: { children?: ReactNode }) => {
  return (
    <RouterContext.Provider value={mockedRouter}>
      {children}
    </RouterContext.Provider>
  )
}


function customRenderer(ui: React.ReactElement, options?: CustomRendererOptions): RenderResult {
  return render(ui, { wrapper: AllAppProviders, ...options });
}

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRenderer as render }