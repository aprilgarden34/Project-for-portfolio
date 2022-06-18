import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './GuideModal_mobile.module.scss';
import { Modal } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import GuideModalCard from './GuideModal_card/GuideModalCard';
import CardDescription from './GuideModal_card/CardDescription';

const GuideModal_mobile: React.FC<{ visible: boolean }> = ({ visible }) => {
  const [visibleBoolean, setVisibleBoolean] = useState(false);
  useEffect(() => {
    setVisibleBoolean(visible);
  }, [visible]);

  return (
    <>
      <Modal
        visible={visibleBoolean}
        width={400}
        bodyStyle={{ height: '720px', padding: '0px', overflowY: 'auto' }}
        closeIcon={
          <CloseOutlined
            style={{ fontSize: '2rem', color: 'black' }}
            onClick={() => setVisibleBoolean(false)}
          />
        }
        closable={true}
        maskClosable={true}
        keyboard={true}
        footer={null}
      >
        <div className={styles.modalImageBox}></div>
        <div className={styles.alertMessage}>
          <p>판별된 식물이 없습니다.</p>
          <p>아래 팁을 확인하시고 사진을 다시 찍어주세요.</p>
        </div>

        <div className={styles.tipBoxWrapper}>
          {CardDescription.map((item, index) => {
            const description = item.description;
            const key = item.key;

            return <GuideModalCard description={description} key={key} />;
          })}
        </div>
      </Modal>
    </>
  );
};

export default GuideModal_mobile;
