import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import SetHelmet from "../../components/SetHelmet";
import { emailCheck, signUp } from "./authSlice";

import gstyles from "../../styles/Global.module.css";

const SignUp = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passConfirm, setConfirm] = useState("");

  const [emailChecked, setEmailChecked] = useState(false);

  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const passConfirmRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    emailRef.current?.focus();
  }, []);

  const duplicateCheck = () => {
    if (email.length === 0) {
      emailRef.current?.focus();
      return;
    }
    dispatch(emailCheck(email)).then((result) => {
      console.log(result);
      // result 분기 처리로 이메일 중복확인 값 변경
      setEmailChecked(true);
    });
  };

  const submitSignUp = () => {
    if (email.length === 0) {
      emailRef.current?.focus();
      alert("이메일을 입력해주세요.");
      return;
    }
    if (!emailChecked) {
      emailRef.current?.focus();
      alert("이메일 중복확인을 해주세요.");
      return;
    }
    if (password.length < 8) {
      passwordRef.current?.focus();
      alert("비밀번호가 너무 짧습니다.");
      return;
    }
    if (password !== passConfirm) {
      passConfirmRef.current?.focus();
      alert("비밀번호를 재확인 해주세요.");
      return;
    }
    dispatch(signUp({ email, password })).then((result) => {
      // 결과에 따라 분기처리
      navigate("/login");
    });
  };

  return (
    <div className={gstyles.container}>
      <SetHelmet
        title={"회원가입"}
        description={"눈오리 월드 회원가입 페이지"}
      />
      <input
        ref={emailRef}
        value={email}
        placeholder={"이메일"}
        onChange={(e) => {
          setEmail(e.target.value);
          setEmailChecked(false); // 중복확인 후 변경하면 초기화
        }}
        onKeyUp={(e) => {
          if (e.key === "Enter") duplicateCheck();
        }}
      />
      <button onClick={duplicateCheck} disabled={email.length === 0}>
        중복확인
      </button>
      <input
        ref={passwordRef}
        value={password}
        type="password"
        placeholder={"비밀번호"}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        ref={passConfirmRef}
        value={passConfirm}
        type="password"
        placeholder={"비밀번호 재확인"}
        onChange={(e) => setConfirm(e.target.value)}
      />
      <button onClick={submitSignUp}>회원가입</button>
    </div>
  );
};

export default SignUp;
