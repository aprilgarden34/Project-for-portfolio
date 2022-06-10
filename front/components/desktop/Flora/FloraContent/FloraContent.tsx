import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import styles from "./FloraContent.module.css";
import Image from "next/image";
import MiddleContentCard from "./FloraContentCard/FloraContentCard";
import { Grid, Row, Col, Card, Avatar, Input } from "antd";
import { DoubleLeftOutlined, DoubleRightOutlined } from "@ant-design/icons";
import { clear } from "console";
import { Value } from "sass";

const FloraContent: React.FC = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const lastPage = Math.ceil(arr.length / 6);

  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 864px)" });
  // const isTablet = useMediaQuery({ query: "(max-width: 864px)" });

  const [page, setPage] = useState(1);

  return (
    <>
      {console.log(page)}
      {isDesktopOrLaptop && (
        <>
          <div className={styles.MiddleContentContainer}>
            <div className={styles.leftSliderBar}>
              <Avatar className={styles.avatar}>
                <DoubleLeftOutlined
                  onClick={() =>
                    page > 1 ? setPage((current) => current - 1) : setPage(1)
                  }
                />
              </Avatar>
            </div>

            <div className={styles.middleContent}>
              <Row gutter={[32, 48]}>
                {arr.map(
                  (item, index) =>
                    page - 1 <= index / 6 &&
                    index / 6 < page && (
                      <MiddleContentCard span={12} key={`key_${index}`} />
                    )
                )}
              </Row>
            </div>

            <div className={styles.rightSliderBar}>
              <Avatar className={styles.avatar}>
                <DoubleRightOutlined
                  onClick={() =>
                    page < lastPage
                      ? setPage((current) => current + 1)
                      : setPage(lastPage)
                  }
                />
              </Avatar>
            </div>
          </div>
        </>
      )}

      {/* {isTablet && (
        <div className={styles.MiddleContentContainer}>
          <Row gutter={[32, 48]}>
            {arr.map((item, index) => (
              <MiddleContentCard span={12} />
            ))}
          </Row>
        </div>
      )} */}
    </>
  );
};

export default FloraContent;
