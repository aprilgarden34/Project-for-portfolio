import styles from './userProfileEdit.module.css';
import { Button } from 'antd';

const UserProfileEdit: React.FC = () => {
  return (
    <>
      <div className={styles.profileEdit}>
        <Button block={true} color="black">
          프로필 편집
        </Button>
      </div>
    </>
  );
};

export default UserProfileEdit;
