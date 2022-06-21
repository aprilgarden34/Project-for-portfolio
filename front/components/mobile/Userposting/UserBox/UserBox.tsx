import Image from 'next/image';
import { Button } from 'antd';
import styles from './UserBox.module.scss';

const UserBox: React.FC = () => {
  return (
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
            <Image src="/images/sample1.jpg" layout="fill" objectFit="cover" />
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
      <div className={styles.badgeBox}>
        <div className={styles.badge}>
          <div className={styles.badgeCircle}>
            <Image src="/images/medal.jpg" layout="fill" />
          </div>
        </div>
        <div className={styles.badge}>
          <div className={styles.badgeCircle}>
            <Image src="/images/medal.jpg" layout="fill" />
          </div>
        </div>
        <div className={styles.badge}>
          <div className={styles.badgeCircle}>
            <Image src="/images/medal.jpg" layout="fill" />
          </div>
        </div>
        <div className={styles.badge}>
          <div className={styles.badgeCircle}>
            <Image src="/images/medal.jpg" layout="fill" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserBox;
