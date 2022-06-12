import styles from './BookHeader_Image.module.css';
import Image from 'next/image';

const BookHeader_Image: React.FC = () => {
  return (
    <>
      <div className={styles.FloraHeader_ImageBox}>
        <Image
          src="/images/flora_header_image.jpg"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </>
  );
};

export default BookHeader_Image;
