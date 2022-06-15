import styles from './RegisterModal.module.scss';
import { useState, useEffect } from 'react';
import { Modal, Button, Input } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

const RegisterModal: React.FC = () => {
  const [visibleBoolean, setVisibleBoolean] = useState(false);
  useEffect(() => {
    setVisibleBoolean(true);
  }, []);

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
              />
            </div>
            <div className={styles.grid3_3}></div>
          </div>

          <div className={styles.loginButtonBox}>
            <Button className={styles.loginButton}>회원가입</Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default RegisterModal;
