import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { push, ref } from "firebase/database";
import { MapContainer, Marker, TileLayer, useMapEvents } from "react-leaflet";
import { db } from "../lib/firebase";
import TopTabs from "../components/TopTabs";

type Position = {
  lat: number;
  lng: number;
};

function LocationPicker({
  position,
  setPosition,
}: {
  position: Position;
  setPosition: (position: Position) => void;
}) {
  useMapEvents({
    click(e) {
      setPosition({
        lat: e.latlng.lat,
        lng: e.latlng.lng,
      });
    },
  });

  return <Marker position={[position.lat, position.lng]} />;
}

export default function GardenRegisterPage() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [crops, setCrops] = useState("");
  const [description, setDescription] = useState("");
  const [preview, setPreview] = useState<string | null>(null);

  const [position, setPosition] = useState<Position>({
    lat: 35.335,
    lng: 129.037,
  });

  const handleSave = async () => {
    if (!title || !location || !crops) {
      alert("텃밭 이름, 주소/위치, 재배 작물을 입력해주세요.");
      return;
    }

    await push(ref(db, "gardens"), {
      title,
      location,
      crops,
      description,
      lat: position.lat,
      lng: position.lng,
      members: 1,
      recent: "새 공유텃밭이 등록되었습니다.",
      imageUrl: preview || "",
      createdAt: Date.now(),
    });

    alert("공유텃밭이 등록되었습니다.");
    navigate("/home");
  };

  return (
    <div style={pageStyle}>
      <div style={contentStyle}>
        <header style={headerStyle}>
          <h1 style={titleStyle}>공유텃밭 등록</h1>
          <p style={subTitleStyle}>
            지도에서 텃밭 위치를 선택하고,
            <br />
            공유할 텃밭 정보를 입력해주세요.
          </p>
        </header>

        <TopTabs />

        <div style={cardStyle}>
          <label style={labelStyle}>텃밭 이름</label>
          <input
            style={inputStyle}
            placeholder="예: 양산 중앙 공유텃밭"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label style={labelStyle}>주소 / 위치</label>
          <input
            style={inputStyle}
            placeholder="예: 경남 양산시 물금읍"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />

          <label style={labelStyle}>지도에서 위치 선택</label>
          <p style={guideTextStyle}>
            지도를 클릭하면 텃밭 위치 핀이 이동합니다.
          </p>

          <div style={mapBoxStyle}>
            <MapContainer
              center={[position.lat, position.lng]}
              zoom={13}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

              <LocationPicker
                position={position}
                setPosition={setPosition}
              />
            </MapContainer>
          </div>

          <div style={locationInfoStyle}>
            선택 위치: {position.lat.toFixed(5)}, {position.lng.toFixed(5)}
          </div>

          <label style={labelStyle}>재배 작물</label>
          <input
            style={inputStyle}
            placeholder="예: 상추, 토마토, 바질"
            value={crops}
            onChange={(e) => setCrops(e.target.value)}
          />

          <label style={labelStyle}>텃밭 소개</label>
          <textarea
            style={textareaStyle}
            placeholder="텃밭의 목적, 운영 방식 등을 적어주세요."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <label style={labelStyle}>텃밭 사진</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (!file) return;
              setPreview(URL.createObjectURL(file));
            }}
          />

          {preview && (
            <img src={preview} alt="미리보기" style={previewStyle} />
          )}

          <button onClick={handleSave} style={buttonStyle}>
            등록하기
          </button>

          <button onClick={() => navigate("/home")} style={subButtonStyle}>
            메인으로 돌아가기
          </button>
        </div>
      </div>
    </div>
  );
}

const pageStyle = {
  minHeight: "100vh",
  background: "#f4f8f1",
};

const contentStyle = {
  maxWidth: 520,
  margin: "0 auto",
  padding: 20,
};

const headerStyle = {
  textAlign: "center" as const,
  marginBottom: 18,
};

const titleStyle = {
  margin: 0,
  color: "#1f3d2b",
  fontSize: 34,
  fontWeight: 900,
};

const subTitleStyle = {
  color: "#5f6f64",
  lineHeight: 1.6,
};

const cardStyle = {
  background: "white",
  borderRadius: 24,
  padding: 24,
  boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
};

const labelStyle = {
  display: "block",
  marginTop: 16,
  marginBottom: 6,
  color: "#304b38",
  fontWeight: 800,
  fontSize: 16,
};

const inputStyle = {
  width: "100%",
  padding: 14,
  borderRadius: 14,
  border: "1px solid #d6ddd4",
  boxSizing: "border-box" as const,
  fontSize: 15,
};

const textareaStyle = {
  ...inputStyle,
  height: 110,
  resize: "none" as const,
};

const guideTextStyle = {
  margin: "0 0 10px",
  color: "#6f7d72",
  fontSize: 14,
};

const mapBoxStyle = {
  height: 260,
  borderRadius: 18,
  overflow: "hidden",
  border: "1px solid #d6ddd4",
};

const locationInfoStyle = {
  marginTop: 10,
  padding: 10,
  borderRadius: 12,
  background: "#eef7ed",
  color: "#2f6f44",
  fontSize: 14,
  fontWeight: 700,
  textAlign: "center" as const,
};

const previewStyle = {
  width: "100%",
  maxHeight: 240,
  objectFit: "cover" as const,
  borderRadius: 16,
  marginTop: 12,
};

const buttonStyle = {
  width: "100%",
  padding: 16,
  marginTop: 22,
  borderRadius: 18,
  border: "none",
  background: "#3f8f4f",
  color: "white",
  fontSize: 17,
  fontWeight: 900,
  cursor: "pointer",
};

const subButtonStyle = {
  width: "100%",
  padding: 14,
  marginTop: 10,
  borderRadius: 18,
  border: "1px solid #3f8f4f",
  background: "white",
  color: "#3f8f4f",
  fontWeight: 900,
  cursor: "pointer",
};