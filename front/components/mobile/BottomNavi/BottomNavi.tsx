<<<<<<< HEAD
import styles from './BottomNavi.module.css';
import { Typography, Button, Form, message, Input, Card } from 'antd';
import {
  UnorderedListOutlined,
  HomeFilled,
  InstagramFilled,
  HeartFilled,
  CameraTwoTone,
=======
import Link from 'next/link';
import styles from './BottomNavi.module.scss';
import {
  HomeFilled,
  EditOutlined,
  FileSearchOutlined,
  CameraTwoTone,
  CrownOutlined,
>>>>>>> front
} from '@ant-design/icons';

const BottomNavi: React.FC = () => {
  return (
    <div className={styles.bottomBox}>
<<<<<<< HEAD
      <HomeFilled style={{ fontSize: '22px', color: 'white' }} />
      <InstagramFilled style={{ fontSize: '22px', color: 'white' }} />
      <CameraTwoTone style={{ fontSize: '36px', color: 'white' }} />
      <HeartFilled style={{ fontSize: '22px', color: 'white' }} />
      <UnorderedListOutlined style={{ fontSize: '22px', color: 'white' }} />
=======
      <Link href="/">
        <a>
          <HomeFilled style={{ fontSize: '22px', color: 'white' }} />
        </a>
      </Link>
      <Link href="/book">
        <a>
          <FileSearchOutlined style={{ fontSize: '22px', color: 'white' }} />
        </a>
      </Link>
      <Link href="/imageupload">
        <a>
          <CameraTwoTone style={{ fontSize: '36px', color: 'white' }} />
        </a>
      </Link>
      <Link href="/community">
        <a>
          <EditOutlined style={{ fontSize: '22px', color: 'white' }} />
        </a>
      </Link>
      <Link href="/profile">
        <a>
          <CrownOutlined style={{ fontSize: '22px', color: 'white' }} />
        </a>
      </Link>
>>>>>>> front
    </div>
  );
};

export default BottomNavi;
