import type { NextPage } from 'next';
import Header from '../../.next/header/header';
import CommunityItem from '../../components/community/CommunityItem';

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
