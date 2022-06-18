<<<<<<< HEAD
import styles from './userSummary.module.css';
=======
import styles from './userSummary.module.scss';
>>>>>>> front
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const UserSummary: React.FC = () => {
  return (
    <>
      <div className={styles.userBox}>
        <div className={styles.userImage}>
          <Avatar size={100} icon={<UserOutlined />}></Avatar>
        </div>
        <div className={styles.user1}>
          <p>도감 해금</p>
          <p>30</p>
        </div>
        <div className={styles.user2}>
          <p>뱃지 개수</p>
          <p>24</p>
        </div>
        <div className={styles.user3}>
          <p>팔로워</p>
          <p>36</p>
        </div>
      </div>
    </>
  );
};

export default UserSummary;
