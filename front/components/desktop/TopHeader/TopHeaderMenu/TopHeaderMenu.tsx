import styles from './TopHeaderMenu.module.scss';
import { Button } from 'antd';

const TopHeaderMenu: React.FC = () => {
  return (
    <>
      <div className={styles.TopHeaderMenu}>
        <Button className={styles.button} type="link">
          도감
        </Button>
        <Button className={styles.button} type="link">
          커뮤니티
        </Button>
        <Button className={styles.button} type="link">
          사진
        </Button>
        <Button className={styles.button} type="link">
          업로드
        </Button>
      </div>
    </>
  );
};

export default TopHeaderMenu;
