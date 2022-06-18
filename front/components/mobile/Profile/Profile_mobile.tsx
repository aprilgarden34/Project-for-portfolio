import TopNavi from '../TopHeader/TopHeader';
import BottomNavi from '../BottomNavi/BottomNavi';
import UserSummary from './userSummary/userSummary';
import UserProfileEdit from './userProfileEdit/userProfileEdit';
import UserBadge from './userInformation/userBadge/UserBadge';
import UserLiked from './userInformation/userLiked/UserLiked';
import UserPost from './userInformation/userPost/UserPost';
import styles from './Profile_mobile.module.scss';

const Profile_mobile: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <TopNavi />
        <div className={styles.profileBox}>
          <UserSummary />
          <UserProfileEdit />
          <UserBadge />
          <UserLiked />
          <UserPost />
        </div>
        <BottomNavi />
      </div>
    </>
  );
};

export default Profile_mobile;
