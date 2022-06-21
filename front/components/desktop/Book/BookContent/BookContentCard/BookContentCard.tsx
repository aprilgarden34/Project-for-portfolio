import { useState } from 'react';
import Image from 'next/image';
import styles from './BookContentCard.module.scss';
import { Card, Col, Modal, Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
const { Meta } = Card;

const BookContentCard: React.FC<{
  span: number;
  src: string;
  key: string;
  name: string;
  month: string;
  flower_lang: string;
  info: string;
  flower: string;
}> = ({ span, key, src, name, month, flower_lang, info, flower }) => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Col span={span}>
        <Card
          className={styles.card}
          bordered={false}
          hoverable={true}
          onClick={() => setVisible(true)}
          cover={<Image src={src} width={480} height={280} objectFit="cover" />}
        >
          <Meta title={name} description={month} />
        </Card>

        <Modal
          visible={visible}
          width={600}
          bodyStyle={{ height: '1200px', padding: '0px' }}
          closeIcon={
            <CloseOutlined
              style={{ fontSize: '2rem', color: 'white' }}
              onClick={() => setVisible(false)}
            />
          }
          closable={true}
          maskClosable={true}
          keyboard={true}
          footer={null}
        >
          <div className={styles.modalImageBox}>
            <Image
              src={src}
              layout="fill"
              objectFit="cover"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          <div className={styles.modalBoxText}>
            <p className={styles.plantName}>{name}</p>
            <p>
              <span className={styles.floweroption}>[꽃말]</span>
              <span className={styles.flowerlang}>{flower_lang}</span>
            </p>
            <p className={styles.infoBox}>
              <span className={styles.content}>{info}</span>
            </p>
            <p className={styles.infoBox}>
              <span className={styles.content}>{flower}</span>
            </p>
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

export default BookContentCard;
