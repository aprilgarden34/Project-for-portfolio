import styles from './Profile.module.scss';
import Image from 'next/image';

const Profile: React.FC = () => {
  return (
    <>
      <div className={styles.profileBox}>
        <div className={styles.profile}>
          <div className={styles.medalImage}>
            <Image
              width={100}
              height={100}
              src="/images/medal.jpg"
              objectFit="contain"
            />
          </div>
          <div className={styles.innerBox}>
            <h2 className={styles.playerName}>민들레홀씨</h2>
            <h3 className={styles.playerEmail}>simanidev@elice.com</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
