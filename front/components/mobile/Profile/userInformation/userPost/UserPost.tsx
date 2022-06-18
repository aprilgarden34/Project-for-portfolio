import styles from './UserPost.module.scss';
import { Avatar } from 'antd';
import { SnippetsTwoTone } from '@ant-design/icons';

const UserPost: React.FC = () => {
  return (
    <>
      <div className={styles.userPost}>
        <Avatar
          style={{ backgroundColor: 'azure' }}
          size={100}
          shape="circle"
          icon={<SnippetsTwoTone twoToneColor="gold" />}
        />
      </div>
    </>
  );
};

export default UserPost;
