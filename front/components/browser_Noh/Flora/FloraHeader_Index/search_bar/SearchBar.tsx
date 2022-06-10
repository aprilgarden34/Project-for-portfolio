import { useState } from "react";
import { Input, Avatar } from "antd";
import { SearchOutlined, FieldTimeOutlined } from "@ant-design/icons";
import styles from "./SearchBar.module.css";

const SearchBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
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
                setSearchQuery("");
              }}
            />
          </div>
        </div>
      </div>
      {/* <div className={styles.classification}>
          <div className={styles.class1}>
            <Avatar size="large">해금</Avatar>
            <Avatar size="large" style={{ backgroundColor: "gray" }}>
              ABC
            </Avatar>
            <Avatar size="large">
              <FieldTimeOutlined />
            </Avatar>
          </div>
          <div className={styles.class2}>
            <Avatar size="large" style={{ backgroundColor: "pink" }}>
              꽃
            </Avatar>
            <Avatar size="large" style={{ backgroundColor: "green" }}>
              나무
            </Avatar>
          </div>
        </div>   */}
    </>
  );
};

export default SearchBar;
