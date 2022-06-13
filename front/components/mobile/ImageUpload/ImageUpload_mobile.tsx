<<<<<<< HEAD
import { useState } from 'react';
=======
import { useEffect, useRef, useState } from 'react';
>>>>>>> origin/front_feature_NJC
import Image from 'next/image';
import styles from './ImageUpload_mobile.module.css';
import TopNavi from '../TopNavi/TopNavi';
import BottomNavi from '../BottomNavi/BottomNavi';
import GuideModal_mobile from './GuideModal_mobile/GuideModal_mobile';
import { Button, Modal } from 'antd';

const ImageUpload_mobile: React.FC = () => {
  // const [visible, setVisible] = useState(false);
<<<<<<< HEAD
  return (
    <>
=======
  const [isSnapped, SetisSnapped] = useState(false);

  // Preview Photo Logic

  const previewPhotoRef = useRef<any>();
  const photoPreview = () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then(function (stream) {
          previewPhotoRef.current.srcObject = stream;
          previewPhotoRef.current.play();
        });
    }
  };

  useEffect(() => {
    photoPreview;
  }, []);

  // Snap Photo Logic

  const SnapPhotoRef = useRef<any>();
  const snapPhoto = () => {
    const context = SnapPhotoRef.current.getContext('2d');
    context.drawImage(previewPhotoRef.current, 0, 0, 290, 319);
    SetisSnapped(true);
  };

  return (
    <div>
>>>>>>> origin/front_feature_NJC
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
<<<<<<< HEAD
              <div className={styles.imagePreview}>
                <Image
                  src="/images/flora_header_image.jpg"
                  layout="fill"
                  objectFit="cover"
                  draggable={false}
                />
              </div>
=======

              <div className={styles.imagePreview}>
                {isSnapped ? (
                  <>
                    <canvas
                      id="canvas"
                      ref={SnapPhotoRef}
                      width="100%"
                      height="100%"
                    />
                    <video
                      id="video"
                      ref={previewPhotoRef}
                      width="0%"
                      height="0%"
                      autoPlay
                    />
                  </>
                ) : (
                  <>
                    <canvas
                      id="canvas"
                      ref={SnapPhotoRef}
                      width="0%"
                      height="0%"
                    />
                    <video
                      id="video"
                      ref={previewPhotoRef}
                      width="100%"
                      height="100%"
                      autoPlay
                    />
                  </>
                )}
              </div>

>>>>>>> origin/front_feature_NJC
              {/* <Button className={styles.imageUploadButton} children="+" /> */}
              <Button
                className={styles.imageClassificationButton}
                children="판별"
<<<<<<< HEAD
=======
                onClick={snapPhoto}
>>>>>>> origin/front_feature_NJC
              />
            </div>
          </div>
        </div>
        <BottomNavi />
      </div>
      {/* <GuideModal_mobile visible={visible} /> */}
<<<<<<< HEAD
    </>
=======
    </div>
>>>>>>> origin/front_feature_NJC
  );
};

export default ImageUpload_mobile;
