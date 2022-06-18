import styles from './BookHeader_Index.module.scss';
import Profile from './profile/Profile';
import SearchOption from './search_option/SearchOption';
import SearchBar from './search_bar/SearchBar';

const BookHeader_Index: React.FC = () => {
  return (
    <div className={styles.topHeaderIndexBox}>
      <Profile />
      <SearchOption />
      <SearchBar />
    </div>
  );
};

export default BookHeader_Index;
