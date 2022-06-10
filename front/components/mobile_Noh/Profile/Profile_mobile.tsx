import TopNavi from "../TopNavi/TopNavi";
import BottomNavi from "../BottomNavi/BottomNavi";
import styles from "./Profile_mobile.module.css";
import { Avatar, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";

const Profile_mobile: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <TopNavi />
        <div className={styles.profileBox}>
          <div className={styles.profileImage}>
            <Avatar size={100} icon={<UserOutlined />}></Avatar>
          </div>
          <div className={styles.profile1}>
            <p>도감 해금</p>
            <p>30</p>
          </div>
          <div className={styles.profile2}>
            <p>뱃지 개수</p>
            <p>24</p>
          </div>
          <div className={styles.profile3}>
            <p>팔로워</p>
            <p>36</p>
          </div>
        </div>
        <div className={styles.profileEdit}>
          <Button block={true} color="black">
            프로필 편집
          </Button>
        </div>
        <BottomNavi />
      </div>
    </>
  );
};

export default Profile_mobile;
