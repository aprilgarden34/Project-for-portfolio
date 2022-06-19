import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import Link from 'next/link';
import styles from './SlideBar.module.scss';
import 'swiper/css';
import SlidingCard from '../SlidingCard/SlidingCard';

const SlideBar: React.FC = () => {
  return (
    <>
      <div className={styles.slideBarContainer}>
        <Swiper
          modules={[Navigation]}
          navigation={true}
          spaceBetween={0}
          loop={true}
          loopedSlides={3}
          slidesPerView="auto"
          centeredSlides={true}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <Link href="/community/userposting">
              <a>
                <SlidingCard />
              </a>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <SlidingCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default SlideBar;
