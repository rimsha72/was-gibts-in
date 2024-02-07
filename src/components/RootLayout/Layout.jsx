import React from 'react';
import Banner from './banner';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Banner />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
