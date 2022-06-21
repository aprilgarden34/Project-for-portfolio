import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './LoginModal.module.scss';
import { Modal, Button, Input } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import * as API from '../../../api/api';

const LoginModal: React.FC<{
  visible: boolean;
  activeState: Function;
  width: number;
  height: number;
  buttonWidth: number;
  buttonHeight: number;
}> = ({ visible, activeState, width, height, buttonWidth, buttonHeight }) => {
  const [visibleBoolean, setVisibleBoolean] = useState(false);

  useEffect(() => {
    setVisibleBoolean(visible);
  }, [visible]);

  useEffect(() => {
    activeState(visibleBoolean);
  }, [visibleBoolean]);

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const submitLoginInfo = () => {
    try {
      API.post('user/signin', {
        email: email,
        password: password,
      }).then((response) => console.log(response));
    } catch (err) {
      console.log('로그인에 실패하셨습니다.');
    }
  };

  return (
    <>
      <Modal
        visible={visibleBoolean}
        width={width}
        bodyStyle={{ height: height, padding: '0px', overflowY: 'auto' }}
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
                onChange={(e) => setEmail(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className={styles.grid2_3}></div>
          </div>
          <div className={styles.loginButtonBox}>
            <Button
              style={{ width: buttonWidth, height: buttonHeight }}
              className={styles.loginButton}
              onClick={submitLoginInfo}
            >
              로그인
            </Button>
          </div>
          <div className={styles.apiLoginBox}>
            <Button className={styles.cacaoLoginButton}>
              <Image
                src="/assets/button/CacaoLoginButton.jpg"
                layout="fill"
                objectFit="fill"
              />
            </Button>
            <Button className={styles.googleLoginButton}>
              <Image
                src="/assets/button/GoogleLoginButton.jpg"
                layout="fill"
                objectFit="fill"
              />
            </Button>
          </div>

          {/* <div className={styles.registerBox}>
            <p>계정이 없으신가요?</p>
            <Button className={styles.registerButton}>회원가입</Button>
          </div> */}
        </div>
      </Modal>
    </>
  );
};

export default LoginModal;
