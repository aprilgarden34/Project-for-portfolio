import styles from './QuestLink.module.scss';
import Image from 'next/image';

const QuestLink: React.FC = () => {
  return (
    <div className={styles.questLink}>
      <Image
        className={styles.questImage}
        src="/images/퀘스트.png"
        layout="fill"
      />
    </div>
  );
};

export default QuestLink;
