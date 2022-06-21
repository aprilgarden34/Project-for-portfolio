import styles from './UserLiked.module.scss';
import { Avatar, Button } from 'antd';
import { LikeTwoTone } from '@ant-design/icons';
const UserLiked: React.FC = () => {
  return (
    <>
      <div className={styles.userLiked}>
        <p>좋아요 한 글</p>
      </div>
    </>
  );
};

export default UserLiked;
