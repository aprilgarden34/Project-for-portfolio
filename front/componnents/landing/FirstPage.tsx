import styles from './FirstPage.module.scss';
const FirstPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.video}>
        <video autoPlay muted loop data-keepplaying>
          <source src="/assets/forest.mp4" type="video/mp4"></source>
        </video>
      </div>
    </div>
  );
};

export default FirstPage;
