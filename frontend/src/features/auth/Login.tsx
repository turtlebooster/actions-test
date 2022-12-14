import { useEffect, useRef, useState } from "react";
import SetHelmet from "../../components/SetHelmet";
import gstyles from "../../styles/Global.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    emailRef.current?.focus();
  }, []);

  const submitLogin = () => {
    alert("구현중");
  };

  return (
    <div className={gstyles.container}>
      <SetHelmet title={"로그인"} description={"눈오리 월드 로그인 페이지"} />
      "Login Page"
      <input
        ref={emailRef}
        value={email}
        placeholder={"이메일"}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            passwordRef.current?.focus();
          }
        }}
      />
      <input
        ref={passwordRef}
        value={password}
        placeholder={"비밀번호"}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            submitLogin();
          }
        }}
      />
      <button onClick={submitLogin}>로그인</button>
    </div>
  );
};

export default Login;
