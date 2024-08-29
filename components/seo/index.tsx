import Head from 'next/head';
import { FC } from 'react';

import { SEOProps } from './seo.types';

const SEO: FC<SEOProps> = ({ pageTitle }) => {
  const title = `${pageTitle} | Mário Silva`;
  return (
    <Head>
      <meta name="theme-color" content="#282828" />
      <meta charSet="utf-8" />
      <meta name="title" content={title} />
      <meta name="description" content="BCA | Front-end Challenge" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content="BCA challenge" />
      <meta property="og:description" content="BCA | Front-end Challenge" />
      <meta
        property="og:image"
        content="https://metaschool.so/assets/landing-page.webp"
      />
      <meta
        property="og:image:secure_url"
        content="/android-chrome-256x256.png"
      />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="256" />
      <meta property="og:image:height" content="256" />
      <meta property="og:image:alt" content={title} />
      <meta name="twitter:description" content="BCA | Front-end Challenge" />
      <title>{title}</title>
    </Head>
  );
};

export default SEO;
