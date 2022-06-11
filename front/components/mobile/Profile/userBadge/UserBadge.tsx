import styles from './UserBadge.module.css';
import { Avatar, Button } from 'antd';
import { TrophyTwoTone } from '@ant-design/icons';

const UserBadge: React.FC = () => {
  return (
    <>
      <div className={styles.userBadge}>
        <Avatar
          style={{ backgroundColor: 'azure' }}
          size={100}
          shape="circle"
          icon={<TrophyTwoTone twoToneColor="gold" />}
        />
      </div>
    </>
  );
};

export default UserBadge;
