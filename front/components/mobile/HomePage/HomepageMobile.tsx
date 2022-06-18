import styles from './Homepage.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import TopHeader from '../TopHeader/TopHeader';
import BottomNavi from '../BottomNavi/BottomNavi';

const HomepageMobile: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <TopHeader />
        <div className={styles.middleContainer}>
          <div className={styles.imageUploadLink}>
            <Link href="/imageupload">
              <a>
                <Image
                  className={styles.imageUploadImage}
                  src="/images/식별.png"
                  layout="fill"
                />
              </a>
            </Link>
          </div>
          <div className={styles.bookLink}>
            <Link href="/book">
              <a>
                <Image
                  className={styles.bookImage}
                  src={'/images/도감.png'}
                  layout="fill"
                />
              </a>
            </Link>
          </div>
          <div className={styles.communityLink}>
            <Link href="/community">
              <a>
                <Image
                  className={styles.communityImage}
                  src="/images/커뮤니티.png"
                  layout="fill"
                />
              </a>
            </Link>
          </div>
          <div className={styles.questLink}>
            <Image
              className={styles.questImage}
              src="/images/퀘스트.png"
              layout="fill"
            />
          </div>
        </div>
        <BottomNavi />
      </div>
    </>
  );
};

export default HomepageMobile;
