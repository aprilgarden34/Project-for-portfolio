import styles from './UserBadge.module.scss';
import { Avatar, Button } from 'antd';
import { TrophyTwoTone } from '@ant-design/icons';

const UserBadge: React.FC = () => {
  return (
    <>
      <div className={styles.badgeContainer}>
        <p>획득한 뱃지</p>
      </div>
    </>
  );
};

export default UserBadge;
