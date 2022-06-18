import React, { useState } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Head from 'next/head';
import FirstPage from '../FirstPage';

const Hooks = () => {
  return (
    <div className="App">
      <Head>
        <title>My styled page</title>
        <link href="/static/styles.css" rel="stylesheet" />
      </Head>
      <ReactFullpage
        navigation
        navigationPosition="right"
        licenseKey="OPEN-SOURCE-GPLV3-LICENSE"
        scrollingSpeed={1000}
        scrollHorizontally={true}
        render={() => (
          <ReactFullpage.Wrapper>
            <div key={1} className="section">
              <FirstPage />
            </div>
            <div key={2} className="section">
              <h1>2</h1>
            </div>
            <div key={3} className="section">
              <h1>3</h1>
            </div>
          </ReactFullpage.Wrapper>
        )}
      />
    </div>
  );
};

export default Hooks;
