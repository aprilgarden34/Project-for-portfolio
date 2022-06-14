import styles from './TopNavi.module.scss';
import { UserOutlined, BarsOutlined } from '@ant-design/icons';

const TopNavi: React.FC = () => {
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

export default TopNavi;
