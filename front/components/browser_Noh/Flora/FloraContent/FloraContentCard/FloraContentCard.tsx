import { useState } from "react";
import Image from "next/image";
import styles from "./FloraContentCard.module.css";
import { Card, Col, Row, Modal, Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";
const { Meta } = Card;

const FloraContentCard: React.FC<{ span: number; key: string }> = (props) => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Col span={props.span}>
        <Card
          className={styles.card}
          bordered={false}
          hoverable={true}
          onClick={() => setVisible(true)}
          cover={
            <Image
              src="/images/참나무.jpg"
              width={480}
              height={280}
              objectFit="cover"
            />
          }
        >
          <Meta title="참나무" description="참나무는 참하다" />
        </Card>

        <Modal
          visible={visible}
          width={600}
          bodyStyle={{ height: "800px", padding: "0px" }}
          closeIcon={
            <CloseOutlined
              style={{ fontSize: "2rem", color: "white" }}
              onClick={() => setVisible(false)}
            />
          }
          closable={true}
          maskClosable={true}
          keyboard={true}
          footer={null}
        >
          <div className={styles.modalImageBox}>
            <Image src="/images/참나무.jpg" layout="fill" objectFit="cover" />
          </div>
          <div className={styles.modalBoxText}>
            <p className={styles.plantName}>참나무</p>
            <p>
              <span className={styles.option} children="꽃말" />
              <span className={styles.content} children="참하다" />
            </p>
            <p>
              <span className={styles.option} children="정보1" />
              <span className={styles.content} children="infromation 1" />
            </p>
            <p>
              <span className={styles.option} children="정보2" />
              <span className={styles.content} children="infromation 2" />
            </p>
            {/* <p className={styles.plantMemo}>메모</p> */}
            {/* <div className={styles.MemoBox}></div> */}
          </div>
          <div className={styles.shareButtonBox}>
            <Button
              className={styles.shareButton}
              onClick={() => setVisible(false)}
              children="공유"
            />
          </div>
        </Modal>
      </Col>
    </>
  );
};

export default FloraContentCard;
