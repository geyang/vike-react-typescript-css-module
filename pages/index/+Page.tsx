import { Counter } from '../../components/Counter.js';

export default Page;
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { listName } from './index.module.scss';

function Page() {
  return (
    <>
      <Helmet>
        <title>Vuer (Technical Preview)</title>
      </Helmet>
      <div className={listName}>
        Does this work?
        <Counter />
      </div>
    </>
  );
}
