import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function GardenRegisterPage() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [crops, setCrops] = useState("");
  const [description, setDescription] = useState("");

  const handleSave = () => {
    if (!title || !location || !crops) {
      alert("텃밭 이름, 위치, 재배 작물을 입력해주세요.");
      return;
    }

    alert("공유텃밭이 등록되었습니다.");
    navigate("/home");
  };

  return (
    <div style={{ minHeight: "100vh", background: "#f4f8f1", padding: 20 }}>
      <div style={{ maxWidth: 420, margin: "0 auto" }}>
        <button
          onClick={() => navigate("/home")}
          style={{
            border: "none",
            background: "transparent",
            color: "#3f8f4f",
            fontWeight: 700,
            fontSize: 16,
            marginBottom: 16,
            cursor: "pointer",
          }}
        >
          ← 메인으로 돌아가기
        </button>

        <h1 style={{ textAlign: "center", color: "#203728" }}>
          공유텃밭 등록
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#6b7b6f",
            marginBottom: 24,
            lineHeight: 1.5,
          }}
        >
          유휴공간이나 함께 관리할 텃밭을 등록해주세요.
        </p>

        <div
          style={{
            background: "white",
            borderRadius: 24,
            padding: 24,
            boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
          }}
        >
          <label style={labelStyle}>텃밭 이름</label>
          <input
            style={inputStyle}
            placeholder="예: 양산 중앙 공유텃밭"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label style={labelStyle}>위치</label>
          <input
            style={inputStyle}
            placeholder="예: 경남 양산시 물금읍"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />

          <label style={labelStyle}>재배 작물</label>
          <input
            style={inputStyle}
            placeholder="예: 상추, 토마토, 바질"
            value={crops}
            onChange={(e) => setCrops(e.target.value)}
          />

          <label style={labelStyle}>텃밭 소개</label>
          <textarea
            style={{ ...inputStyle, height: 120, resize: "none" }}
            placeholder="텃밭의 목적, 참여 대상, 운영 방식 등을 적어주세요."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <button onClick={handleSave} style={buttonStyle}>
            등록하기
          </button>
        </div>
      </div>
    </div>
  );
}

const labelStyle = {
  display: "block",
  marginTop: 14,
  marginBottom: 6,
  color: "#304b38",
  fontWeight: 700,
  fontSize: 15,
};

const inputStyle = {
  width: "100%",
  padding: 15,
  borderRadius: 16,
  border: "1px solid #ddd",
  boxSizing: "border-box" as const,
  fontSize: 16,
  outline: "none",
};

const buttonStyle = {
  width: "100%",
  padding: 16,
  marginTop: 24,
  borderRadius: 18,
  border: "none",
  background: "#3f8f4f",
  color: "white",
  fontSize: 18,
  fontWeight: 700,
  cursor: "pointer",
};