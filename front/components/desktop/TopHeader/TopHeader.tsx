import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './TopHedaer.module.scss';
import { Button } from 'antd';
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

  return (
    <>
      <div className={styles.TopHeaderContainer}>
        <div className={styles.TopHedaerLeft}>
          <div className={styles.TopHeaderTitle}>
            <Image
              src="/images/나만의식물도감로고.png"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className={styles.TopHeaderMenu}>
            <Link href="/book">
              <a>
                <Button className={styles.button} type="link" children="도감" />
              </a>
            </Link>
            <Button className={styles.button} type="link" children="커뮤니티" />
            <Link href="/profile">
              <a>
                <Button
                  className={styles.button}
                  type="link"
                  children="프로필"
                />
              </a>
            </Link>
            <Link href="/imageupload">
              <a>
                <Button
                  className={styles.button}
                  type="link"
                  children="업로드"
                />
              </a>
            </Link>
          </div>
        </div>
        <div className={styles.TopHeaderMiddleEmpty}></div>
        <div className={styles.TopHeaderRight}>
          <div className={styles.TopHeaderUserMenu}>
            <Button
              type="link"
              className={styles.button}
              onClick={() => setLoginVisible(true)}
            >
              로그인
            </Button>
            <Button
              type="link"
              className={styles.button}
              onClick={() => setRegisterVisible(true)}
            >
              회원가입
            </Button>
          </div>
        </div>
      </div>

      <LoginModal
        visible={loginVisible}
        activeState={loginActiveState}
        width={800}
        height={1000}
        buttonWidth={160}
        buttonHeight={80}
      />
      <RegisterModal
        visible={resgisterVisible}
        activeState={registerActiveState}
        width={800}
        height={1000}
        buttonWidth={160}
        buttonHeight={80}
      />
    </>
  );
};

export default TopHeader;
