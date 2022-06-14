import TopNavi from '../TopNavi/TopNavi';
import SearchBar from './SearchBar/SearchBar';
import FloraCard from './BookCard/BookCard';
import BottomNavi from '../BottomNavi/BottomNavi';
import styles from './Book_mobile.module.scss';

const Book_mobile: React.FC = () => {
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

export default Book_mobile;
