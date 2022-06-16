import styles from './imageUploadLink.module.scss';
import Image from 'next/image';

const ImageUploadLink: React.FC = () => {
  return (
    <div className={styles.imageUploadLink}>
      <Image
        className={styles.imageUploadImage}
        src="/images/식별.png"
        layout="fill"
      />
    </div>
  );
};

export default ImageUploadLink;
