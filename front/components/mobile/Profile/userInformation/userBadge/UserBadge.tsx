import styles from './UserBadge.module.scss';

const UserBadge: React.FC = () => {
  return (
    <div className={styles.userBadge}>
      <p>획득한 뱃지</p>
    </div>
  );
};

export default UserBadge;
