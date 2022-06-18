import UserBadge from './userBadge/userBadge';
import UserLiked from './userLiked/userLiked';
import UserPost from './userPost/userPost';
import styles from './UserInformation.module.scss';

const UserInformation: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <p>유저정보</p>
        <UserBadge />
        <UserLiked />
        <UserPost />
      </div>
    </>
  );
};

export default UserInformation;
