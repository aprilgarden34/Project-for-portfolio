import styles from './UserPost.module.scss';

const UserPost: React.FC = () => {
  return (
    <div className={styles.userPost}>
      <p>포스팅 한 게시글</p>
    </div>
  );
};

export default UserPost;
