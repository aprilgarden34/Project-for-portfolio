import styles from './Community.module.scss';
import Image from 'next/image';

const CommunityLink: React.FC = () => {
  return (
    <div className={styles.communityLink}>
      <Image
        className={styles.communityImage}
        src="/images/커뮤니티.png"
        layout="fill"
      />
    </div>
  );
};

export default CommunityLink;
