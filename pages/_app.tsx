import { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';

import 'styles/_app.scss';
import 'antd/dist/antd.css';

type NextPageWithLayout = {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page: ReactElement) => page);
  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
