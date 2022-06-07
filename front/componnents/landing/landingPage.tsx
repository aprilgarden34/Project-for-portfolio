import styles from './landingPage.module.scss';
const LandingPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.first}>
        <video autoPlay muted loop width={'100%'} height={'100%'}>
          <source src="/assets/forest.mp4" type="video/mp4"></source>
        </video>
      </div>
      <div className={styles.second}>secondPage</div>
      <div className={styles.third}>thirdPage</div>
      <div className={styles.forth}>forthPage</div>
    </div>
  );
};

export default LandingPage;
