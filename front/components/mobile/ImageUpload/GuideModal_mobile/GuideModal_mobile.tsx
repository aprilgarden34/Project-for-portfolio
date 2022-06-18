import { useState, useEffect } from 'react';
import Image from 'next/image';
<<<<<<< HEAD
import styles from './GuideModal_mobile.module.css';
import { Button, Modal, Avatar } from 'antd';
import { CloseOutlined, CheckCircleOutlined } from '@ant-design/icons';
=======
import styles from './GuideModal_mobile.module.scss';
import { Modal } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import GuideModalCard from './GuideModal_card/GuideModalCard';
import CardDescription from './GuideModal_card/CardDescription';
>>>>>>> front

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
<<<<<<< HEAD
          <div className={styles.tipBox} key="tip1">
            <p>1. 식물을 프레임 중앙으로 맞춰주세요</p>
            <div className={styles.flexBox}>
              <div className={styles.exampleImage}>
                <Avatar size="large" icon={<CloseOutlined />} shape="square" />
              </div>
              <div className={styles.exampleImage}>
                <Avatar
                  size="large"
                  shape="square"
                  children="O"
                  style={{ fontSize: '1.6rem', verticalAlign: 'center' }}
                />
              </div>
            </div>
          </div>
          <div className={styles.tipBox} key="tip2">
            <p>2. 식물의 꽃과 잎을 포함해 주세요</p>
            <div className={styles.flexBox}>
              <div className={styles.exampleImage}>
                <Avatar size="large" icon={<CloseOutlined />} shape="square" />
              </div>
              <div className={styles.exampleImage}>
                <Avatar
                  size="large"
                  shape="square"
                  children="O"
                  style={{ fontSize: '1.6rem', verticalAlign: 'center' }}
                />
              </div>
            </div>
          </div>
          <div className={styles.tipBox} key="tip3">
            <p>3. 잎이나 꽃이 선명하게 나올 수 있도록 해주세요</p>
            <div className={styles.flexBox}>
              <div className={styles.exampleImage}>
                <Avatar size="large" icon={<CloseOutlined />} shape="square" />
              </div>
              <div className={styles.exampleImage}>
                <Avatar
                  size="large"
                  shape="square"
                  children="O"
                  style={{ fontSize: '1.6rem', verticalAlign: 'center' }}
                />
              </div>
            </div>
          </div>
          <div className={styles.tipBox} key="tip5">
            <p>4. 식물이 꽃이라면 꽃에 초점을 맞추어 주세요</p>
            <div className={styles.flexBox}>
              <div className={styles.exampleImage}>
                <Avatar size="large" icon={<CloseOutlined />} shape="square" />
              </div>
              <div className={styles.exampleImage}>
                <Avatar
                  size="large"
                  shape="square"
                  children="O"
                  style={{ fontSize: '1.6rem', verticalAlign: 'center' }}
                />
              </div>
            </div>
          </div>
          <div className={styles.tipBox} key="tip4">
            <p>5. 한 번에 한 가지 식물만 촬영해 주세요</p>
            <div className={styles.flexBox}>
              <div className={styles.exampleImage}>
                <Avatar size="large" icon={<CloseOutlined />} shape="square" />
              </div>
              <div className={styles.exampleImage}>
                <Avatar
                  size="large"
                  shape="square"
                  children="O"
                  style={{ fontSize: '1.6rem', verticalAlign: 'center' }}
                />
              </div>
            </div>
          </div>
=======
          {CardDescription.map((item, index) => {
            const description = item.description;
            const key = item.key;

            return <GuideModalCard description={description} key={key} />;
          })}
>>>>>>> front
        </div>
      </Modal>
    </>
  );
};

export default GuideModal_mobile;
