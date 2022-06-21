import { Input, Avatar } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useSetRecoilState } from 'recoil';
import { searchQuery } from '../../../../common/Atom/Atom';
import styles from './SearchBar.module.scss';

const SearchBar: React.FC = () => {
  const setSearchQuery = useSetRecoilState(searchQuery);

  return (
    <>
      <div className={styles.searchBox}>
        <div className={styles.searchInner}>
          <Avatar className={styles.avatar} size="large">
            <SearchOutlined />
          </Avatar>
          <div className={styles.searchLine}>
            <Input.TextArea
              className={styles.searchBar}
              bordered={false}
              autoSize
              placeholder="검색"
              maxLength={8}
              onChange={(e) => {
                setSearchQuery(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
