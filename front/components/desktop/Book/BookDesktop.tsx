import TopHeader from '../TopHeader/TopHeader';
import BookHeader_Image from './BookHeader_Image/BookHeader_Image';
import BookHeader_Index from './BookHeader_Index/BookHeader_Index';
import BookContent from './BookContent/BookContent';
import styles from './BookDeskTop.module.scss';

const BookDeskTop: React.FC = () => {
  return (
    <>
      <div className={styles.floraHeader}>
        <TopHeader />
        <BookHeader_Image />
        <BookHeader_Index />
        <div className={styles.floraContent}>
          <BookContent />
        </div>
      </div>
    </>
  );
};

export default BookDeskTop;
