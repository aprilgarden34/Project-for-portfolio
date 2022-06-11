import Link from 'next/link';

import styles from './communityItem.module.scss';

const CommunityItem: React.FC = () => {
  const item = {
    userName: '닉네임',
    date: '2020',
    hashtag: '민들레',
    src: '1',
  };
  return (
    <>
      <div className={styles.container}>
        <p>{item.userName}</p>
        <p>{item.date}</p>
      </div>
    </>
  );
};

export default CommunityItem;
