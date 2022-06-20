import styles from './UserPost.module.scss';
import { Avatar } from 'antd';
import { SnippetsTwoTone } from '@ant-design/icons';

const UserPost: React.FC = () => {
  return (
    <div className={styles.userPost}>
      <p>포스팅 한 게시글</p>
    </div>
  );
};

export default UserPost;

{
  /* <Avatar
style={{ backgroundColor: 'azure' }}
size={100}
shape="circle"
icon={<SnippetsTwoTone twoToneColor="gold" />}
/> */
}
