// import { formatStrategyValues } from "rc-tree-select/lib/utils/strategyUtil";
// import { useMediaQuery } from "react-responsive";

import TopHeader from "../TopHeader/TopHeader";
import FloraHeader_Image from "./FloraHeader_Image/FloraHeader_Image";
import FloraHeader_Index from "./FloraHeader_Index/FloraHeader_Index";
import FloraContent from "./FloraContent/FloraContent";
import styles from "./FloraDeskTop.module.css";

const FloraDeskTop: React.FC = () => {
  return (
    <>
      <div className={styles.floraHeader}>
        <TopHeader />
        <FloraHeader_Image />
        <FloraHeader_Index />
        <div className={styles.floraContent}>
          <FloraContent />
        </div>
      </div>
    </>
  );
};

export default FloraDeskTop;
