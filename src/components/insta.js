import React from 'react';
import Image from 'gatsby-image';
import { css } from '@emotion/core';

const Insta = () => {
  // where does the data come from?

  return (
    <>
      <h2>Instagram posts from @gatsbyjs</h2>
      <div>{/* show posts here */}</div>
      <a href={`https://instagram.com/gatsbyjs`}>
        See more on Instagram &rarr;
      </a>
    </>
  );
};

export default Insta;
