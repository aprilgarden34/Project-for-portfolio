<<<<<<< HEAD
import type { NextPage } from 'next';
import Header from '../../components/header/header';
import CommunityItem from '../../components/community/CommunityItem';

const Community: NextPage = () => {
  return (
    <>
      <Header />
      <h1>Community</h1>
      <CommunityItem />
=======
import CommunityMobile from '../../components/mobile/Community/CommunityMobile';

const CommunityPage: React.FC = () => {
  return (
    <>
      <CommunityMobile />
>>>>>>> front
    </>
  );
};

<<<<<<< HEAD
export default Community;
=======
export default CommunityPage;
>>>>>>> front
