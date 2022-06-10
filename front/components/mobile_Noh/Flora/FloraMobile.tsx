import TopNavi from "../TopNavi/TopNavi";
import SearchBar from "./SearchBar/SearchBar";
import FloraCard from "./FloraCard/FloraCard";
import BottomNavi from "../BottomNavi/BottomNavi";
import styles from "./FloraMobile.module.css";

const FloraMobile: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <TopNavi />
        <SearchBar />
        <div className={styles.middleContainer}>
          <FloraCard />
        </div>
        <BottomNavi />
      </div>
    </>
  );
};

export default FloraMobile;
