import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        gap: "8px",
      }}
    >
      <Link to="/">홈</Link>
      <Link to="/login">로그인</Link>
      <Link to="/signup">회원가입</Link>
      <Link to="/couter">state 샘플</Link>
    </div>
  );
};

export default Nav;
