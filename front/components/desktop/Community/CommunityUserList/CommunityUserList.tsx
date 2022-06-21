import styles from './CommunityUserList.module.scss';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import SlidingUserCard from '../SlidingUserCard/SlidingUserCard';

const CommunityUserList: React.FC = () => {
  return (
    <div className={styles.userListContainer}>
      <Swiper
        modules={[Navigation]}
        navigation={true}
        spaceBetween={0}
        loop={true}
        loopedSlides={3}
        slidesPerView={3}
        centeredSlides={true}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div
            style={{
              width: '15rem',
              height: '15rem',
              backgroundColor: 'white',
            }}
          >
            <SlidingUserCard />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              width: '15rem',
              height: '15rem',
              backgroundColor: 'white',
            }}
          >
            <SlidingUserCard />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              width: '15rem',
              height: '15rem',
              backgroundColor: 'white',
            }}
          >
            <SlidingUserCard />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CommunityUserList;
