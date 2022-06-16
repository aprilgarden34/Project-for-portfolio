import styles from './Homepage.module.scss';
import TopHeader from '../TopHeader/TopHeader';
import BottomNavi from '../BottomNavi/BottomNavi';
import BookLink from './BookLink/BookLink';
import ImageUploadLink from './ImageUploadLink/ImageUploadLink';
import CommunityLink from './CommunityLink/CommunityLink';
import QuestLink from './ProfileLink/QuestLink';

const HomepageMobile: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <TopHeader />
        <div className={styles.middleContainer}>
          <ImageUploadLink />
          <BookLink />
          <CommunityLink />
          <QuestLink />
        </div>
        <BottomNavi />
      </div>
    </>
  );
};

export default HomepageMobile;
