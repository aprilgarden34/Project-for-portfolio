import TopNavi from '../TopNavi/TopNavi';
import SearchBar from './SearchBar/SearchBar';
import FloraCard from './FloraCard/FloraCard';
import BottomNavi from '../BottomNavi/BottomNavi';
import styles from './Flora_mobile.module.css';

const Flora_mobile: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <TopNavi />
        <div className={styles.middleContainer}>
          <SearchBar />
          <FloraCard />
          <FloraCard />
        </div>
        <BottomNavi />
      </div>
    </>
  );
};

export default Flora_mobile;
