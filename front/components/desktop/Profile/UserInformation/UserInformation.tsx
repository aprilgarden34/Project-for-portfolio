import UserBadge from './userBadge/UserBadge';
import UserLiked from './userLiked/UserLiked';
import UserPost from './userPost/UserPost';
import styles from './UserInformation.module.scss';

const UserInformation: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <p className={styles.headTitle}>유저정보</p>
        <UserBadge />
        <UserLiked />
        <UserPost />
      </div>
    </>
  );
};

export default UserInformation;
