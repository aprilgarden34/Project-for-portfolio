import Link from 'next/link';
import styles from './BottomNavi.module.scss';
import {
  HomeFilled,
  EditOutlined,
  FileSearchOutlined,
  CameraTwoTone,
  CrownOutlined,
} from '@ant-design/icons';

const BottomNavi: React.FC = () => {
  return (
    <div className={styles.bottomBox}>
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
    </div>
  );
};

export default BottomNavi;
