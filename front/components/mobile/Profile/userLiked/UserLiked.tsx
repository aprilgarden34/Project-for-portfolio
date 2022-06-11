import styles from './UserLiked.module.css';
import { Avatar, Button } from 'antd';
import { LikeTwoTone } from '@ant-design/icons';
const UserLiked: React.FC = () => {
  return (
    <>
      <div className={styles.userLiked}>
        <Avatar
          style={{ backgroundColor: 'azure' }}
          size={100}
          shape="circle"
          icon={<LikeTwoTone twoToneColor="gold" />}
        />
      </div>
    </>
  );
};

export default UserLiked;
