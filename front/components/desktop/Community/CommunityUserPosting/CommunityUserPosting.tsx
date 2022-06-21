import styles from './CommunityUserPosting.module.scss';
import Image from 'next/image';
import sampleImage from '../../../../public/images/sample1.jpg';
import FloraDescription from '../../Book/BookContent/FloraDescription/FloraDescription';
import { Button } from 'antd';

const CommunityUserPosting: React.FC = () => {
  return (
    <div className={styles.userPostingContainer}>
      <div className={styles.userBox}>
        <div className={styles.userNicknameBox}>
          <span>공부하는 아냐</span>
          <Button className={styles.followButton} type="primary">
            팔로우
          </Button>
        </div>
        <div className={styles.infoBox}>
          <div className={styles.profileImage}>
            <div className={styles.imageInnnerBox}>
              <Image
                src={sampleImage}
                layout="fill"
                objectFit="cover"
                draggable={false}
              />
            </div>
          </div>
          <div className={styles.postingNumBox}>
            <p className={styles.number}>1284</p>
            <p className={styles.index}>게시글</p>
          </div>
          <div className={styles.followerNumBox}>
            <p className={styles.number}>964</p>
            <p className={styles.index}>팔로워</p>
          </div>
          <div className={styles.followingNumBox}>
            <p className={styles.number}>1877</p>
            <p className={styles.index}>팔로잉</p>
          </div>
        </div>
      </div>
      <div className={styles.userPostingBox}>
        <div className={styles.postingImageBox}>
          {FloraDescription.map((item, index) => {
            return (
              <div key={`key${index}`} className={styles.postingImage}>
                <Image
                  src={item.src}
                  layout="fill"
                  objectFit="cover"
                  draggable={false}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CommunityUserPosting;
