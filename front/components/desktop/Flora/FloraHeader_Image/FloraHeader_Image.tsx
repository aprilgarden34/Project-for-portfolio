import styles from "./FloraHeader_Image.module.css";
import Image from "next/image";

const FloraHeader_Image: React.FC = () => {
  return (
    <>
      <div className={styles.FloraHeader_ImageBox}>
        <Image
          src="/images/flora_header_image.jpg"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </>
  );
};

export default FloraHeader_Image;
