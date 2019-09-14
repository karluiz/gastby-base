import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Hero from '../components/hero';

export default () => (
  <>
    <Hero />
    <Layout>
      <h1>About me!</h1>
      <p>this page is about me ;D</p>
      <Link to="/">&larr; back to home</Link>
    </Layout>
  </>
);
