import Image from 'next/image';
import landingPage3nd from '../../../../public/images/landingPage_3nd.png';

const ThirdPage: React.FC = () => {
  return (
    <>
      <Image src={landingPage3nd} layout="fill" objectFit="contain" />
    </>
  );
};

export default ThirdPage;
