import TopHeader from '../TopHeader/TopHeader';
import UserBox from './UserBox/UserBox';
import PostingImage from './PostingImage/PostingImage';
import BottomNavi from '../BottomNavi/BottomNavi';
import styles from './UserPosting.module.scss';

const UserPosting: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <TopHeader />
        <div className={styles.Middlecontainer}>
          <UserBox />
          <PostingImage />
        </div>
        <BottomNavi />
      </div>
    </>
  );
};

export default UserPosting;
