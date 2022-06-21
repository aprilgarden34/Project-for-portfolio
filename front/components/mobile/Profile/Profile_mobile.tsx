import TopHeader from '../TopHeader/TopHeader';
import BottomNavi from '../BottomNavi/BottomNavi';
import UserSummary from './userSummary/userSummary';
import UserInformation from './userInformation/userInformation';
import styles from './Profile_mobile.module.scss';

const Profile_mobile: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <TopHeader />
        <div className={styles.profileBox}>
          <UserSummary />
          <UserInformation />
        </div>
        <BottomNavi />
      </div>
    </>
  );
};

export default Profile_mobile;
