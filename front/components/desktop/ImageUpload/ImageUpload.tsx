import { useState } from 'react';
import Image from 'next/image';
import styles from './ImageUpload.module.css';
import TopHeaderContainer from '../TopHeader/TopHeader';
import GuideModal from './guide_modal/GuideModal';
import { Button, Modal } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

const ImageUpload: React.FC = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <TopHeaderContainer />
      <div className={styles.uploadContainer}>
        <div className={styles.uploadBox}>
          <p
            className={styles.guideMessage}
            children="도감에 넣을 사진을 찍어주세요"
          />
          <Button
            className={styles.guideButton}
            onClick={() => setVisible(true)}
            children="촬영 가이드"
          />
          <div className={styles.imagePreview}>
            <Image
              src="/images/flora_header_image.jpg"
              layout="fill"
              objectFit="cover"
              draggable={false}
            />
          </div>
          <Button className={styles.imageUploadButton} children="+" />
          <Button
            className={styles.imageClassificationButton}
            children="판별"
          />
        </div>
      </div>

      <GuideModal visible={visible} />
    </div>
  );
};

export default ImageUpload;
