import styles from './QuestMobile.module.scss';
import TopHeader from '../TopHeader/TopHeader';
import BottomNavi from '../BottomNavi/BottomNavi';
import QuestBox from './QuestBox/QuestBox';

const QuestMobile: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <TopHeader />
        <div className={styles.profileBox}>
          <QuestBox />
        </div>
        <BottomNavi />
      </div>
    </>
  );
};

export default QuestMobile;
