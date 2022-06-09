import type { NextPage } from 'next';
import Header from '../../componnents/header/header';
import CommunityItem from '../../componnents/community/CommunityItem';

const Community: NextPage = () => {
  return (
    <>
      <Header />
      <h1>Community</h1>
      <CommunityItem />
    </>
  );
};

export default Community;
