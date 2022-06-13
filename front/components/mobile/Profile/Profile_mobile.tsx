import TopNavi from '../TopNavi/TopNavi';
import BottomNavi from '../BottomNavi/BottomNavi';
import UserSummary from './userSummary/userSummary';
import UserProfileEdit from './userProfileEdit/userProfileEdit';
<<<<<<< HEAD
import UserBadge from './userBadge/UserBadge';
import UserLiked from './userLiked/UserLiked';
import UserPost from './userPost/UserPost';
=======
import UserBadge from './userInformation/userBadge/UserBadge';
import UserLiked from './userInformation/userLiked/UserLiked';
import UserPost from './userInformation/userPost/UserPost';
>>>>>>> origin/front_feature_NJC

import styles from './Profile_mobile.module.css';

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
