import Image from 'next/image';
import styles from './UserSummary.module.scss';
import { Button, Input } from 'antd';

const UserSummary: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <p>프로필 수정</p>
        </div>

        <div className={styles.summaryBox}>
          <div className={styles.grid_1_1}>
            <p>프로필 사진</p>
          </div>

          <div className={styles.grid_1_2}>
            <div className={styles.imageEdit}>
              <div className={styles.imageBox}>
                <Image
                  src="/images/참나무.jpg"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <Button className={styles.editButton} children="사진 수정" />
            </div>
          </div>

          <div className={styles.grid_2_1}>
            <p>닉네임 수정</p>
          </div>
          <div className={styles.grid_2_2}>
            <Input className={styles.inputBox} placeholder="새로운 닉네임" />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserSummary;
