import TopHeader from '../TopHeader/TopHeader';
import BottomNavi from '../BottomNavi/BottomNavi';
import SlidingCard from './SlidingCard/SlidingCard';
import styles from './Community.module.scss';

const Community: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <TopHeader />
        <div className={styles.middleContainer}>
          <div className={styles.headTitle}>
            <h3>자신이 찍은 식물의 사진을 공유해보세요.</h3>
            <h5>사진을 보고 마음에 드는 사람을 팔로우해보세요.</h5>
          </div>

          <div className={styles.slidingCardContainer}>
            <SlidingCard />
          </div>
        </div>
        <BottomNavi />
      </div>
    </>
  );
};

export default Community;
