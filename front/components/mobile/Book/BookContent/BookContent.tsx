import styles from './BookContent.module.scss';
import BookContentCard from './BookContentCard/BookContentCard';
import FloraDescription from './FloraDescription/FloraDescription';

const BookContent: React.FC = () => {
  return (
    <>
      {FloraDescription.map((item, index) => {
        return (
          <BookContentCard
            src={item.src}
            key={`key${index}`}
            name={item.name}
            month={item.month}
            flower_lang={item.flower_lang}
            info={item.info}
            flower={item.flower}
          />
        );
      })}
    </>
  );
};

export default BookContent;
