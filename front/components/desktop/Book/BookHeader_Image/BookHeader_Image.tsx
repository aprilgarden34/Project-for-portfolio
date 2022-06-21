import styles from './BookHeader_Image.module.scss';
import Image from 'next/image';
import bookHeaderImage from '../../../../public/images/bookHeaderImage.jpg';

const BookHeader_Image: React.FC = () => {
  return (
    <>
      <div className={styles.FloraHeader_ImageBox}>
        <Image src={bookHeaderImage} layout="fill" objectFit="cover" />
      </div>
    </>
  );
};

export default BookHeader_Image;
