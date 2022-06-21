import styles from './UserBadge.module.scss';
import { Avatar } from 'antd';
import { TrophyTwoTone } from '@ant-design/icons';

const UserBadge: React.FC = () => {
  return (
    <div className={styles.userBadge}>
      <p>획득한 뱃지</p>
    </div>
  );
};

export default UserBadge;
