export default Page;
import React from 'react';
import { navigate } from 'vike/client/router';
import { Counter } from '../../components/Counter';
import { Helmet } from 'react-helmet-async';

import { listName } from './index.module.scss';

function Page() {
  return (
    <>
      <Helmet>
        <title>Welcome to Vike</title>
      </Helmet>
      <h1>Welcome to Vike</h1>
      This page is:
      <ul className={listName}>
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Counter />
        </li>
      </ul>
      <p>
        <button
          onClick={() => {
            const target = ['/markdown', '/star-wars', '/hello/alice'];
            const randomIndex = Math.floor(Math.random() * target.length);
            navigate(target[randomIndex]);
          }}
        >
          Random Page
        </button>
      </p>
    </>
  );
}
