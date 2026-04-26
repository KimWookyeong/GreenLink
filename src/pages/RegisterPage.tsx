import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    if (!email || !password) {
      alert("이메일과 비밀번호를 입력해주세요.");
      return;
    }

    // Firebase 연결 전 임시 이동
    navigate("/profile-setup");
  };

  return (
    <div style={pageStyle}>
      <div style={cardStyle}>
        <h1>회원가입</h1>
        <p>GreenLink에 오신 것을 환영합니다.</p>

        <input
          style={inputStyle}
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          style={inputStyle}
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button style={buttonStyle} onClick={handleRegister}>
          회원가입
        </button>

        <p>
          이미 계정이 있나요? <Link to="/login">로그인</Link>
        </p>
      </div>
    </div>
  );
}

const pageStyle = {
  minHeight: "100vh",
  background: "#f4f8f1",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: 20,
};

const cardStyle = {
  width: "100%",
  maxWidth: 420,
  background: "white",
  borderRadius: 24,
  padding: 24,
  boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
  textAlign: "center" as const,
};

const inputStyle = {
  width: "100%",
  padding: 14,
  marginTop: 12,
  borderRadius: 14,
  border: "1px solid #ddd",
  boxSizing: "border-box" as const,
};

const buttonStyle = {
  width: "100%",
  padding: 14,
  marginTop: 18,
  borderRadius: 14,
  border: "none",
  background: "#3f8f4f",
  color: "white",
  fontWeight: 700,
  cursor: "pointer",
};