import * as React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

type LayoutProps = {
  title?: string;
};

const Layout: React.FunctionComponent<LayoutProps> = ({ children, title }) => (
  <Wrapper>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    {children}
    <Footer />
  </Wrapper>
);

const Wrapper = styled.div`
  margin: 20,
  padding: 20,
  border: "1px solid #DDD"
`;

export default Layout;
