
import Portfolio from '@/components/portfolio';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';


export const metadata = {
  title: "Portfolio - Asipified By AK",
};


const index = () => {
  return (
    <Wrapper>
      <Portfolio />
    </Wrapper>
  );
};

export default index;