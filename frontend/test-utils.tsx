import React, { ReactNode } from 'react';
import { render, RenderOptions, RenderResult, Queries } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { RouterContext } from 'next/dist/next-server/lib/router-context'
import { NextRouter } from 'next/router';

type CustomRendererOptions = RenderOptions<Queries>;

const router: NextRouter = {
  asPath: '',
  basePath: '',
  pathname: '',
  query: {},
  route: '',
  back: jest.fn(),
  push: jest.fn(),
  replace: jest.fn(),
  reload: jest.fn(),
  beforePopState: jest.fn(),
  prefetch: jest.fn(),
  events: {
    emit: jest.fn(),
    on: jest.fn(),
    off: jest.fn()
  },
  isFallback: false
}

// add all application context providers in here 
// as and when they get added to the app
const AllAppProviders = ({ children }: { children?: ReactNode }) => {
  return (
    <RouterContext.Provider value={router}>
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