import styles from './Community.module.scss';
import TopHeader from '../TopHeader/TopHeader';
import CommunityUserList from './CommunityUserList/CommunityUserList';
import CommunityUserPosting from './CommunityUserPosting/CommunityUserPosting';

const Community: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <TopHeader />
        <CommunityUserList />
        <CommunityUserPosting />
      </div>
    </>
  );
};

export default Community;
