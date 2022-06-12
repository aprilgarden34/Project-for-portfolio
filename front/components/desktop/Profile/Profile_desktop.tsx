import TopHeader from '../TopHeader/TopHeader';
import UserSummary from './UserSummary/UserSummary';
import UserInformation from './UserInformation/UserInformation';
import styles from './Profile_desktop.module.css';

const Profile_desktop: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <TopHeader />
        <UserSummary />
        <UserInformation />
      </div>
    </>
  );
};

export default Profile_desktop;
