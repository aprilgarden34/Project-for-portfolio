import styles from './BookLink.module.scss';
import Image from 'next/image';

const BookLink: React.FC = () => {
  return (
    <div className={styles.bookLink}>
      <Image
        className={styles.bookImage}
        src={'/images/도감.png'}
        layout="fill"
      />
    </div>
  );
};

export default BookLink;
