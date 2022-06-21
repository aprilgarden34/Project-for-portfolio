import { useState } from 'react';
import Image from 'next/image';
import styles from './BookContentCard.module.scss';
import { Modal } from 'antd';
import { Button } from 'antd/lib/radio';
import { CloseOutlined } from '@ant-design/icons';

const BookContentCard: React.FC<{
  src: string;
  key: string;
  name: string;
  month: string;
  flower_lang: string;
  info: string;
  flower: string;
}> = ({ key, src, name, month, flower_lang, info, flower }) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div className={styles.cardBox} key={key}>
        <div className={styles.card} onClick={() => setVisible(true)}>
          <div className={styles.imageBox}>
            <div className={styles.imageInner}>
              <Image src={src} layout="fill" objectFit="cover" />
            </div>
          </div>
          <div className={styles.contentBox}>
            <p className={styles.name}>{name}</p>
            <p>꽃말: {flower_lang}</p>
            <p>개화시기: {month}</p>
          </div>
        </div>
      </div>

      <Modal
        centered
        visible={visible}
        closable={true}
        maskClosable={true}
        keyboard={true}
        footer={null}
        closeIcon={
          <CloseOutlined
            style={{ fontSize: '2rem', color: 'white' }}
            onClick={() => setVisible(false)}
          />
        }
        bodyStyle={{ height: '800px', padding: '0px' }}
        width={600}
      >
        <div className={styles.modalBox}>
          <Image src={src} width={360} height={360} objectFit="cover" />
          <div className={styles.modalBoxText}>
            <p className={styles.plantName}>{name}</p>
            <p>
              <span className={styles.floweroption}>[꽃말]</span>
              <span className={styles.flowerlang}>{flower_lang}</span>
            </p>
            <p className={styles.infoBox}>
              <span className={styles.content}>{info}</span>
            </p>
          </div>
          <div className={styles.shareButtonBox}>
            <Button
              className={styles.shareButton}
              onClick={() => setVisible(false)}
              children="공유"
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default BookContentCard;
