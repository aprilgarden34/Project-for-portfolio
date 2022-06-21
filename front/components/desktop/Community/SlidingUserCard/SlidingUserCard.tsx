import styles from './SlidingUserCard.module.scss';
import Image from 'next/image';
import userProfileImage from '../../../../public/images/sample1.jpg';
import { Button } from 'antd';

const SlidingUserCard: React.FC = () => {
  return (
    <div className={styles.slidingCard}>
      <div className={styles.userProfileImageBox}>
        <div className={styles.profileImage}>
          <Image
            src={userProfileImage}
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
            src={userProfileImage}
            width="100%"
            height="100%"
            objectFit="cover"
          />
        </div>
        <div className={styles.postingImage}>
          <Image
            src={userProfileImage}
            width="100%"
            height="100%"
            objectFit="cover"
          />
        </div>
        <div className={styles.postingImage}>
          <Image
            src={userProfileImage}
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
  );
};

export default SlidingUserCard;
