import UserBadge from './userBadge/UserBadge';
import UserLiked from './userLiked/UserLiked';
import UserPost from './userPost/UserPost';

const userInformation: React.FC = () => {
  return (
    <div
      style={{
        height: 720,
        width: 388,
        margin: 'auto',
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
        marginTop: '-1rem',
        marginBottom: '1rem',
      }}
    >
      <UserBadge />
      <UserLiked />
      <UserPost />
    </div>
  );
};

export default userInformation;
