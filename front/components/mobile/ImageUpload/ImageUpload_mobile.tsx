import { useState } from 'react';
import Image from 'next/image';
import styles from './ImageUpload_mobile.module.css';
import TopNavi from '../TopNavi/TopNavi';
import BottomNavi from '../BottomNavi/BottomNavi';
import GuideModal_mobile from './GuideModal_mobile/GuideModal_mobile';
import { Button, Modal } from 'antd';

const ImageUpload_mobile: React.FC = () => {
  // const [visible, setVisible] = useState(false);
  return (
    <div>
      <div className={styles.container}>
        <TopNavi />
        <div className={styles.middleContainer}>
          <div className={styles.uploadContainer}>
            <div className={styles.uploadBox}>
              <p
                className={styles.guideMessage}
                children="도감에 넣을 사진을 찍어주세요"
              />
              {/* <Button
                className={styles.guideButton}
                onClick={() => setVisible(true)}
                children="촬영 가이드"
              /> */}
              <div className={styles.imagePreview}>
                <Image
                  src="/images/flora_header_image.jpg"
                  layout="fill"
                  objectFit="cover"
                  draggable={false}
                />
              </div>
              {/* <Button className={styles.imageUploadButton} children="+" /> */}
              <Button
                className={styles.imageClassificationButton}
                children="판별"
              />
            </div>
          </div>
        </div>
        <BottomNavi />
      </div>
      {/* <GuideModal_mobile visible={visible} /> */}
    </div>
  );
};

export default ImageUpload_mobile;
