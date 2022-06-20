import { useState } from 'react';
import Link from 'next/link';
import styles from './TopHeader.module.scss';
import { UserOutlined, BarsOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import LoginModal from '../../common/Login/LoginModal';
import RegisterModal from '../../common/Register/RegisterModal';

const TopHeader: React.FC = () => {
  const [loginVisible, setLoginVisible] = useState(false);
  const [resgisterVisible, setRegisterVisible] = useState(false);
  const loginActiveState = (state: boolean) => {
    setLoginVisible(state);
  };
  const registerActiveState = (state: boolean) => {
    setRegisterVisible(state);
  };

  const menu = (
    <Menu
      items={[
        {
          label: <p onClick={() => setLoginVisible(true)}>로그인</p>,
          key: '0',
        },
        {
          label: <p onClick={() => setRegisterVisible(true)}>회원가입</p>,
          key: '1',
        },
        {
          type: 'divider',
        },
        {
          label: (
            <Link href="/profile">
              <a>
                <p>프로필</p>
              </a>
            </Link>
          ),
          key: '3',
        },
      ]}
    />
  );

  return (
    <>
      <div className={styles.titleBox}>
        <Dropdown overlay={menu} trigger={['click']}>
          <Space>
            <UserOutlined style={{ fontSize: '32px', color: 'white' }} />
          </Space>
        </Dropdown>
        <h2 className={styles.title}>나만의 식물도감</h2>
        <BarsOutlined style={{ fontSize: '32px', color: 'white' }} />
      </div>

      <LoginModal
        visible={loginVisible}
        activeState={loginActiveState}
        width={400}
        height={720}
        buttonWidth={150}
        buttonHeight={60}
      />
      <RegisterModal
        visible={resgisterVisible}
        activeState={registerActiveState}
        width={400}
        height={720}
        buttonWidth={160}
        buttonHeight={60}
      />
    </>
  );
};

export default TopHeader;
