import styles from './PostingImage.module.scss';
import Image from 'next/image';
import FloraDescription from '../../Book/BookContent/FloraDescription/FloraDescription';

import { Item } from 'rc-menu';

const PostingImage: React.FC = () => {
  return (
    <div className={styles.postingImageBox}>
      {FloraDescription.map((item, index) => {
        return (
          <div key={`key${index}`} className={styles.postingImage}>
            <Image
              src={item.src}
              layout="fill"
              objectFit="cover"
              draggable={false}
            />
          </div>
        );
      })}
    </div>
  );
};

export default PostingImage;
