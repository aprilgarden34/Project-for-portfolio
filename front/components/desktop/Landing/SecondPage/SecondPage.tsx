import Image from 'next/image';

const SecondPage: React.FC = () => {
  return (
    <>
      <Image
        src="/images/landingPage_2nd.png"
        layout="fill"
        objectFit="contain"
      />
    </>
  );
};

export default SecondPage;
