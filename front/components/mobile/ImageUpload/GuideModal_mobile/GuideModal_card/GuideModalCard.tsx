import styles from './GuideModalCard.module.scss';
import { Avatar } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

const GuideModalCard: React.FC<{ description: String; key: any }> = ({
  description,
  key,
}) => {
  return (
    <div className={styles.tipBox} key={key}>
      <p>{description}</p>
      <div className={styles.flexBox}>
        <div className={styles.exampleImage}>
          <Avatar size="large" icon={<CloseOutlined />} shape="square" />
        </div>
        <div className={styles.exampleImage}>
          <Avatar
            size="large"
            shape="square"
            children="O"
            style={{ fontSize: '1.6rem', verticalAlign: 'center' }}
          />
        </div>
      </div>
    </div>
  );
};

export default GuideModalCard;
