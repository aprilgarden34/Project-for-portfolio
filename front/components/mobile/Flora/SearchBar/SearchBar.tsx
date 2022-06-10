import styles from "./SearchBar.module.css";
import { Input, Avatar } from "antd";
import {
  SearchOutlined,
  HistoryOutlined,
  FileSearchOutlined,
  FileExcelOutlined,
} from "@ant-design/icons";

const SearchBar: React.FC = () => {
  return (
    <div className={styles.searchContainer}>
      <Input
        prefix={<SearchOutlined />}
        placeholder="식물 검색하기"
        type="string"
        style={{
          width: "60%",
          height: "80%",
          borderRadius: "10px",
        }}
      />
      <Avatar size={32} icon={<HistoryOutlined />} />
      <Avatar size={32} icon={<FileSearchOutlined />} />
      <Avatar size={32} icon={<FileExcelOutlined />} />
    </div>
  );
};

export default SearchBar;
