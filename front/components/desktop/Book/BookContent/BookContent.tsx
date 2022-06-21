import { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { searchQuery } from '../../../common/Atom/Atom';
import { searchOption } from '../../../common/Atom/Atom';
import FloraDescription from './FloraDescription/FloraDescription';
import fuzzysort from 'fuzzysort';
import styles from './BookContent.module.scss';
import BookContentCard from './BookContentCard/BookContentCard';
import { Row, Avatar } from 'antd';
import { DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons';

const BookContent: React.FC = () => {
  /* 페이지네이션 */
  const [page, setPage] = useState(1);
  const lastPage = Math.ceil(FloraDescription.length / 6);
  const MoveToPrev = () =>
    page > 1 ? setPage((current) => current - 1) : setPage(1);
  const MoveToNext = () =>
    page < lastPage ? setPage((current) => current + 1) : setPage(lastPage);

  /* 서치기능 */

  const searchQueryResult = useRecoilValue(searchQuery);
  const [floraList, setFloraList] = useState(FloraDescription);
  const SearchResult = fuzzysort.go(searchQueryResult, FloraDescription, {
    key: 'name',
    all: true,
  });

  const SearchLogic = () => {
    const searchResultList: string[] = [];
    SearchResult.map((item) => {
      const floraName = item.target;
      searchResultList.push(floraName);
    });
    const SearchedFloraList = FloraDescription.filter((item) => {
      return searchResultList.indexOf(item.name) !== -1;
    });

    setFloraList(SearchedFloraList);
  };

  useEffect(
    () =>
      searchQueryResult === '' ? setFloraList(FloraDescription) : SearchLogic,
    [searchQueryResult],
  );

  /* 서치옵션 */

  const [searchOption, setSearchOption] = useState('');

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
            {floraList.map(
              (item, index) =>
                page - 1 <= index / 6 &&
                index / 6 < page && (
                  <BookContentCard
                    span={12}
                    key={`key${index}`}
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
