import styles from './SearchOption.module.scss';

const SearchOption: React.FC = () => {
  return (
    <>
      <div className={styles.searchOptionBox}>
        <div className={styles.searchOption}>
          <p>ALL</p>
          <p>해금</p>
          <p>비해금</p>
          <p>날짜</p>
        </div>
      </div>
    </>
  );
};

export default SearchOption;
