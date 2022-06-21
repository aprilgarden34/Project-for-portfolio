import { useState } from 'react';
import styles from './BookContent.module.scss';

import BookContentCard from './BookContentCard/BookContentCard';
import FloraDescription from './FloraDescription/FloraDescription';
import { Row, Avatar } from 'antd';
import { DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons';

const BookContent: React.FC = () => {
  const [page, setPage] = useState(1);
  const lastPage = Math.ceil(FloraDescription.length / 6);
  const MoveToPrev = () =>
    page > 1 ? setPage((current) => current - 1) : setPage(1);
  const MoveToNext = () =>
    page < lastPage ? setPage((current) => current + 1) : setPage(lastPage);

  return (
    <>
      <div className={styles.MiddleContentContainer}>
        <div className={styles.leftSliderBar}>
          <Avatar className={styles.avatar}>
            <DoubleLeftOutlined onClick={MoveToPrev} />
          </Avatar>
        </div>

        <div className={styles.middleContent}>
          <Row gutter={[32, 48]}>
            {FloraDescription.map(
              (item, index) =>
                page - 1 <= index / 6 &&
                index / 6 < page && (
                  <BookContentCard
                    span={12}
                    key={`key_${index}`}
                    src={item.src}
                    name={item.name}
                    month={item.month}
                    flower_lang={item.flower_lang}
                    info={item.info}
                    flower={item.flower}
                  />
                ),
            )}
          </Row>
        </div>

        <div className={styles.rightSliderBar}>
          <Avatar className={styles.avatar}>
            <DoubleRightOutlined onClick={MoveToNext} />
          </Avatar>
        </div>
      </div>
    </>
  );
};

export default BookContent;
