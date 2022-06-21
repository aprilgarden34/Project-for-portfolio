import Image from 'next/image';
import landingPage2nd from '../../../../public/images/landingPage_2nd.png';

const SecondPage: React.FC = () => {
  return (
    <>
      <Image src={landingPage2nd} layout="fill" objectFit="contain" />
    </>
  );
};

export default SecondPage;
