import styles from "./FloraHeader_Index.module.css";
import Profile from "./profile/Profile";
import SearchOption from "./search_option/SearchOption";
import SearchBar from "./search_bar/SearchBar";

const FloraHeader_Index: React.FC = () => {
  return (
    <div className={styles.topHeaderIndexBox}>
      <Profile />
      <SearchOption />
      <SearchBar />
    </div>
  );
};

export default FloraHeader_Index;
