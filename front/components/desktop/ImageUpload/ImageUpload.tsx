import { useRef, useState } from 'react';
import Image from 'next/image';
import BookHeaderImage from '../../../public/images/bookHeaderImage.jpg';
import styles from './ImageUpload.module.scss';
import TopHeaderContainer from '../TopHeader/TopHeader';
import GuideModal from './guide_modal/GuideModal';
import { Button } from 'antd';

const ImageUpload: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [imageUrl, setImageUrl] = useState<any>(null);
  const fileInputRef = useRef<any>();

  const onChangeImage = () => {
    const reader = new FileReader();
    const file = fileInputRef.current.files[0];
    console.log(file);

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImageUrl(reader.result);
      console.log('이미지주소', reader.result);
    };
  };

  return (
    <div>
      <TopHeaderContainer />
      <div className={styles.uploadContainer}>
        <div className={styles.uploadBox}>
          <p className={styles.guideMessage}>도감에 넣을 사진을 찍어주세요</p>
          <Button
            className={styles.guideButton}
            onClick={() => setVisible(true)}
          >
            촬영 가이드
          </Button>
          <div className={styles.imagePreview}>
            <Image
              src={imageUrl ? imageUrl : BookHeaderImage}
              layout="fill"
              objectFit="cover"
              draggable={false}
            />
          </div>
          <Button
            className={styles.imageUploadButton}
            onClick={() => fileInputRef.current.click()}
          >
            +
          </Button>
          <input
            type="file"
            className={styles.hiddenInput}
            ref={fileInputRef}
            onChange={onChangeImage}
          />
          <Button className={styles.imageClassificationButton}>판별 </Button>
        </div>
      </div>

      <GuideModal visible={visible} />
    </div>
  );
};

export default ImageUpload;
