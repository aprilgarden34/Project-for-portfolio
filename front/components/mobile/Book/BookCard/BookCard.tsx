import { useState } from 'react';
import Image from 'next/image';
import styles from './BookCard.module.css';
import { Modal } from 'antd';

const BookCard: React.FC = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div className={styles.submitBox}>
        <div className={styles.card} onClick={() => setVisible(true)}>
          <div className={styles.imageBox}>
            <div className={styles.imageInner}></div>
          </div>
          <div className={styles.contentBox}>
            <p>이름 : 참나무</p>
            <p>특징 : 이름처럼 참합니다.</p>
            <p>해금날짜 : 2022.06.08</p>
          </div>
        </div>
      </div>

      <Modal
        title="참나무"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        bodyStyle={{ height: '800px', padding: '40px' }}
        width={600}
      >
        <div className={styles.modalBox}>
          <Image
            src="/images/참나무.jpg"
            width={360}
            height={360}
            objectFit="cover"
          />
          <div className={styles.modalBoxText}>
            Oak / Quercus spp. 참나무속에 속하는 식물 약 500여 종을 일컫는
            말이다. 원시적인 꽃을 피우고 도토리라는 열매를 맺는다.
          </div>
        </div>
      </Modal>
    </>
  );
};

export default BookCard;
