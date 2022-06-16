import styles from './TopHeader.module.scss';
import { UserOutlined, BarsOutlined } from '@ant-design/icons';

const TopHeader: React.FC = () => {
  return (
    <>
      <div className={styles.titleBox}>
        <BarsOutlined style={{ fontSize: '32px', color: 'white' }} />
        <h2 className={styles.title}>나만의 식물도감</h2>
        <UserOutlined style={{ fontSize: '32px', color: 'white' }} />
      </div>
    </>
  );
};

export default TopHeader;
