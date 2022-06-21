import styles from './QuestBox.module.scss';
import Image from 'next/image';
import dice from '../../../../public/images/랜덤주사위.jpg';

const QuestBox: React.FC = () => {
  return (
    <>
      <div className={styles.Profile_mobile}>
        <div className={styles.container}>
          <div className={styles.title}>
            <p>오늘의 일일 퀘스트</p>
            <div className={styles.randomDice}>
              <Image src={dice} width={45} height={45}></Image>
            </div>
          </div>
          <div className={styles.summaryBox}>
            <div className={styles.grid_1_1}>참나무를 찍어오기!</div>
            <div className={styles.grid_2_1}>
              <div className={styles.imageBox}>
                <Image
                  src="/images/참나무.jpg"
                  layout="fill"
                  objectFit="cover"
                  draggable={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestBox;
