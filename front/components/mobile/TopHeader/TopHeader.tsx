import styles from './TopHeader.module.scss';
import { UserOutlined, BarsOutlined } from '@ant-design/icons';

const TopHeader: React.FC = () => {
  return (
    <>
      <div className={styles.titleBox}>
        <BarsOutlined style={{ fontSize: '32px', color: 'white' }} />
        <h1 className={styles.title}>SIMMANI</h1>
        <UserOutlined style={{ fontSize: '32px', color: 'white' }} />
      </div>
    </>
  );
};

export default TopHeader;
