import styles from './TopHeaderUserMenu.module.scss';
import { Button } from 'antd';

const TopHeaderUserMenu: React.FC = () => {
  return (
    <>
      <div className={styles.TopHeaderUserMenu}>
        <Button type="link" className={styles.button}>
          로그인
        </Button>
        <Button type="link" className={styles.button}>
          회원가입
        </Button>
      </div>
    </>
  );
};

export default TopHeaderUserMenu;
