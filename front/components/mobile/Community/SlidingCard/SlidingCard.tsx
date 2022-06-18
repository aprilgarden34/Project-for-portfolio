import Image from 'next/image';
import styles from './SlidingCard.module.scss';
import { Button } from 'antd';

const SlidingCard: React.FC = () => {
  return (
    <>
      <div className={styles.slidingCard}>
        <div className={styles.userProfileImageBox}>
          <div className={styles.profileImage}>
            <Image
              src="/images/sample1.jpg"
              width="100%"
              height="100%"
              objectFit="cover"
            />
          </div>
        </div>
        <div className={styles.userIdBox}>
          <p className={styles.userId}>sampleId</p>
        </div>
        <div className={styles.userposting}>
          <div className={styles.postingImage}>
            <Image
              src="/images/도감.png"
              width="100%"
              height="100%"
              objectFit="cover"
            />
          </div>
          <div className={styles.postingImage}>
            <Image
              src="/images/커뮤니티.png"
              width="100%"
              height="100%"
              objectFit="cover"
            />
          </div>
          <div className={styles.postingImage}>
            <Image
              src="/images/퀘스트.png"
              width="100%"
              height="100%"
              objectFit="cover"
            />
          </div>
        </div>
        <div className={styles.followButtonBox}>
          <Button className={styles.followButton} type="primary">
            팔로우
          </Button>
        </div>
      </div>
    </>
  );
};

export default SlidingCard;
