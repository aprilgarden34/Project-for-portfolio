import { useState } from 'react';
import { Input, Avatar } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import styles from './SearchBar.module.scss';

const SearchBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
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
              onChange={(e) => setSearchQuery(e.target.value)}
              onPressEnter={(e) => {
                console.log(searchQuery);
                setSearchQuery('');
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
