import React, { useState } from 'react';
import { Block } from 'baseui/block';

import NavBar from '../components/shared/NavBar';
import Footer from '../components/shared/Footer';
import { HeadingLevel } from 'baseui/heading';

const Home: React.FC<{
  children: any;
  hasHeader: boolean;
}> = function (props: { children; hasHeader; }) {
  const [hasHeader, SetHasHeader] = useState(props.hasHeader);
  return (
    <>
      <HeadingLevel>
        <NavBar />
        {hasHeader && <main>{props.children}</main>}
        <Footer />
      </HeadingLevel>
    </>
  );
};

export default Home;
