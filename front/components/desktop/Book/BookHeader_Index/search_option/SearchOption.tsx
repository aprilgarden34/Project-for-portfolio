import styles from './SearchOption.module.scss';
import { useSetRecoilState } from 'recoil';
import { searchOption } from '../../../../common/Atom/Atom';

const SearchOption: React.FC = () => {
  const setSearchOption = useSetRecoilState(searchOption);

  return (
    <>
      <div className={styles.searchOptionBox}>
        <div className={styles.searchOption}>
          <p onClick={() => setSearchOption('all')}>ALL</p>
          <p onClick={() => setSearchOption('cleared')}>해금</p>
          <p onClick={() => setSearchOption('uncleared')}>비해금</p>
          <p onClick={() => setSearchOption('timebased')}>날짜</p>
        </div>
      </div>
    </>
  );
};

export default SearchOption;
