import TopNavi from '../TopHeader/TopHeader';
import SearchBar from './SearchBar/SearchBar';
import BookContent from './BookContent/BookContent';
import BottomNavi from '../BottomNavi/BottomNavi';
import styles from './BookMobile.module.scss';

const BookMobile: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <TopNavi />
        <div className={styles.middleContainer}>
          <SearchBar />
          <BookContent />
        </div>
        <BottomNavi />
      </div>
    </>
  );
};

export default BookMobile;
