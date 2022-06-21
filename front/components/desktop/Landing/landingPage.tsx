import ReactFullpage from '@fullpage/react-fullpage';
import Head from 'next/head';
import FirstPage from './FirstPage/FirstPage';
import SecondPage from './SecondPage/SecondPage';
import ThirdPage from './ThirdPage/ThirdPage';

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
            <div
              key={1}
              className="section"
              style={{
                width: '1200px',
                margin: 'auto',
              }}
            >
              <FirstPage />
            </div>
            <div
              key={2}
              className="section"
              style={{
                width: '1200px',
                position: 'relative',
                margin: 'auto',
              }}
            >
              <SecondPage />
            </div>
            <div
              key={3}
              className="section"
              style={{
                width: '1200px',
                position: 'relative',
                margin: 'auto',
              }}
            >
              <ThirdPage />
            </div>
          </ReactFullpage.Wrapper>
        )}
      />
    </div>
  );
};

export default Hooks;
