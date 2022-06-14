import styles from './TopHedaer.module.scss';
import TopHeaderTitle from './TopHeaderTitle/TopHeaderTitle';
import TopHeaderMenu from './TopHeaderMenu/TopHeaderMenu';
import TopHeaderUserMenu from './TopHeaderUserMenu/TopHeaderUserMenu';

const TopHeader: React.FC = () => {
  return (
    <>
      <div className={styles.TopHeaderContainer}>
        <div className={styles.TopHedaerLeft}>
          <TopHeaderTitle />
          <TopHeaderMenu />
        </div>
        <div className={styles.TopHeaderMiddleEmpty}></div>
        <div className={styles.TopHeaderRight}>
          <TopHeaderUserMenu />
        </div>
      </div>
    </>
  );
};

export default TopHeader;
