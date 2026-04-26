import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProfileSetupPage() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [school, setSchool] = useState("");
  const [region, setRegion] = useState("");

  const handleSave = () => {
    if (!name || !region) {
      alert("이름과 지역을 입력해주세요.");
      return;
    }

    // Firebase 연결 전 임시 저장 단계
    navigate("/home");
  };

  return (
    <div style={pageStyle}>
      <div style={cardStyle}>
        <h1>회원정보 등록</h1>
        <p>텃밭 등록과 활동 기록에 사용할 정보를 입력해주세요.</p>

        <input
          style={inputStyle}
          placeholder="이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          style={inputStyle}
          placeholder="학교 또는 소속"
          value={school}
          onChange={(e) => setSchool(e.target.value)}
        />

        <input
          style={inputStyle}
          placeholder="활동 지역 예: 양산시 물금읍"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
        />

        <button style={buttonStyle} onClick={handleSave}>
          저장하고 시작하기
        </button>
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