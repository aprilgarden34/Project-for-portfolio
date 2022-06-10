import styles from './BottomNavi.module.css';
import { Typography, Button, Form, message, Input, Card } from 'antd';
import {
  UnorderedListOutlined,
  HomeFilled,
  InstagramFilled,
  HeartFilled,
  CameraTwoTone,
} from '@ant-design/icons';

const BottomNavi: React.FC = () => {
  return (
    <div className={styles.bottomBox}>
      <HomeFilled style={{ fontSize: '22px', color: 'white' }} />
      <InstagramFilled style={{ fontSize: '22px', color: 'white' }} />
      <CameraTwoTone style={{ fontSize: '36px', color: 'white' }} />
      <HeartFilled style={{ fontSize: '22px', color: 'white' }} />
      <UnorderedListOutlined style={{ fontSize: '22px', color: 'white' }} />
    </div>
  );
};

export default BottomNavi;
