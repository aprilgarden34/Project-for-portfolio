import styles from './LoginModalMobile.module.scss';
import { useState, useEffect } from 'react';
import { Modal, Button, Input } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

const LoginModalMobile: React.FC = () => {
  const [visibleBoolean, setVisibleBoolean] = useState(false);
  useEffect(() => {
    setVisibleBoolean(true);
  }, []);

  return (
    <>
      <Modal
        visible={visibleBoolean}
        width={400}
        bodyStyle={{ height: '720px', padding: '0px', overflowY: 'auto' }}
        closeIcon={
          <CloseOutlined
            style={{ fontSize: '2rem', color: 'black' }}
            onClick={() => setVisibleBoolean(false)}
          />
        }
        closable={true}
        maskClosable={true}
        keyboard={true}
        footer={null}
      >
        <div className={styles.modalContatiner}>
          <div className={styles.loginTitleBox}>
            <div className={styles.grid1}></div>
            <div className={styles.grid2}>로그인</div>
            <div className={styles.grid3}></div>
          </div>
          <div className={styles.userInputContainer}>
            <div className={styles.grid1_1}></div>
            <div className={styles.grid1_2_idBox}>
              <p>e-mail</p>
              <Input
                className={styles.idInput}
                type="text"
                placeholder="이메일을 입력해주세요"
              />
            </div>
            <div className={styles.grid1_3}></div>
            <div className={styles.grid2_1}></div>
            <div className={styles.grid2_2_passwordBox}>
              <p>password</p>
              <Input
                className={styles.passwordInput}
                type="password"
                placeholder="비밀번호를 입력해주세요"
              />
            </div>
            <div className={styles.grid2_3}></div>
          </div>
          <div className={styles.loginButtonBox}>
            <Button className={styles.loginButton}>로그인</Button>
          </div>
          <div className={styles.apiLoginBox}>
            <Button className={styles.cacaoLoginButton}>'</Button>
            <Button className={styles.googleLoginButton}>'</Button>
          </div>
          <div className={styles.registerBox}>
            <p>계정이 없으신가요?</p>
            <Button className={styles.registerButton}>회원가입</Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default LoginModalMobile;
