import { useRef, useState } from 'react';
import Image from 'next/image';
import styles from './UserSummary.module.scss';
import { Button, Input } from 'antd';

const UserSummary: React.FC = () => {
  const [nickname, setNickname] = useState('');
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
    <>
      <div className={styles.Profile_mobile}>
        <div className={styles.container}>
          <div className={styles.title}>
            <p>프로필 수정</p>
          </div>
          <div className={styles.summaryBox}>
            <div className={styles.grid_1_1}>
              <div className={styles.imageEdit}>
                <div className={styles.imageBox}>
                  <Image
                    src={imageUrl ? imageUrl : '/images/flora_header_image.jpg'}
                    layout="fill"
                    objectFit="cover"
                    draggable={false}
                  />
                </div>
                <Button
                  className={styles.editButton}
                  onClick={() => fileInputRef.current.click()}
                >
                  사진 수정
                </Button>
                <input
                  type="file"
                  className={styles.hiddenInput}
                  ref={fileInputRef}
                  onChange={onChangeImage}
                />
              </div>
              <Button
                type="primary"
                className={styles.profileImageChangeButton}
              >
                적용
              </Button>
            </div>
            <div className={styles.grid_2_1}>
              <Input
                type="text"
                className={styles.inputBox}
                placeholder="새로운 닉네임"
                onChange={(e) => setNickname(e.target.value)}
              />
              <Button type="ghost" className={styles.nicknameChangeButton}>
                적용
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserSummary;
