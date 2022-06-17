import styles from './RegisterModal.module.scss';
import { useState, useEffect } from 'react';
import { Modal, Button, Input } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import * as API from '../../../api/api';

const RegisterModal: React.FC = () => {
  const [visibleBoolean, setVisibleBoolean] = useState(false);
  useEffect(() => {
    setVisibleBoolean(true);
  }, []);

  const [email, setEmail] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const submitUserInfo = () => {
    API.post('user/signup', {
      email: email,
      username: nickname,
      password: password,
    }).then((response) => console.log(response));
  };

  return (
    <>
      <Modal
        visible={visibleBoolean}
        width={800}
        bodyStyle={{ height: '1000px', padding: '0px', overflowY: 'auto' }}
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
            <div className={styles.grid2}>회원가입</div>
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
            <div className={styles.grid2_2_nicknameBox}>
              <p>닉네임</p>
              <Input
                className={styles.nicknameInput}
                type="text"
                placeholder="닉네임을 입력해주세요"
                onChange={(e) => setNickname(e.target.value)}
              />
            </div>
            <div className={styles.grid2_3}></div>

            <div className={styles.grid3_1}></div>
            <div className={styles.grid3_2_passwordBox}>
              <p>비밀번호</p>
              <Input
                className={styles.passwordInput}
                type="password"
                placeholder="비밀번호를 입력해주세요"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className={styles.grid3_3}></div>
          </div>

          <div className={styles.loginButtonBox}>
            <Button className={styles.loginButton} onClick={submitUserInfo}>
              회원가입
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default RegisterModal;
