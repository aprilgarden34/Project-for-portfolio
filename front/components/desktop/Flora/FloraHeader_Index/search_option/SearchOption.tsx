import styles from "./SearchOption.module.css";

const SearchOption: React.FC = () => {
  return (
    <>
      <div className={styles.searchOptionBox}>
        <div className={styles.searchOption}>
          <p>ALL</p>
          <p>꽃</p>
          <p>식물</p>
          <p>나무</p>
        </div>
      </div>
    </>
  );
};

export default SearchOption;
