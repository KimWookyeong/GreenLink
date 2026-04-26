import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { onValue, ref } from "firebase/database";
import { db } from "../lib/firebase";
import TopTabs from "../components/TopTabs";

type Garden = {
  id: string;
  title: string;
  location: string;
  crops: string;
  description?: string;
  members?: number;
  recent?: string;
  lat: number;
  lng: number;
  imageUrl?: string;
};

const defaultGardens: Garden[] = [
  {
    id: "sample-1",
    title: "양산 중앙 공유텃밭",
    location: "경남 양산시",
    crops: "상추, 토마토",
    members: 8,
    recent: "오늘 오전 물주기 완료",
    lat: 35.335,
    lng: 129.037,
  },
  {
    id: "sample-2",
    title: "물금 청소년 텃밭",
    location: "경남 양산시 물금읍",
    crops: "바질, 토마토",
    members: 5,
    recent: "상추 성장 기록 추가",
    lat: 35.31,
    lng: 129.01,
  },
];

export default function HomePage() {
  const navigate = useNavigate();
  const [gardens, setGardens] = useState<Garden[]>(defaultGardens);

  useEffect(() => {
    const gardenRef = ref(db, "gardens");

    const unsubscribe = onValue(gardenRef, (snapshot) => {
      const data = snapshot.val();

      if (!data) {
        setGardens(defaultGardens);
        return;
      }

      const firebaseGardens = Object.entries(data).map(([id, value]) => ({
        id,
        ...(value as Omit<Garden, "id">),
      }));

      setGardens([...firebaseGardens, ...defaultGardens]);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div style={pageStyle}>
      <div style={contentStyle}>
        <header style={headerStyle}>
          <h1 style={titleStyle}>GreenLink 🌱</h1>
          <p style={subTitleStyle}>지역 공유텃밭 연결·관리 플랫폼</p>
        </header>

        <TopTabs />

        <section style={heroStyle}>
          <h2 style={heroTitleStyle}>
            유휴공간을 공유텃밭으로
            <br />
            연결해보세요
          </h2>
          <p style={heroTextStyle}>
            함께 심고, 함께 기록하고,
            <br />
            수확물을 지역 주민과 나누는
            <br />
            순환형 텃밭 플랫폼입니다.
          </p>
        </section>

        <section style={mapBoxStyle}>
          <MapContainer
            center={[35.32, 129.02]}
            zoom={12}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            {gardens.map((garden) => (
              <Marker key={garden.id} position={[garden.lat, garden.lng]}>
                <Popup>
                  <div style={{ textAlign: "center" }}>
                    <strong>{garden.title}</strong>
                    <br />
                    {garden.location}
                    <br />
                    🌿 {garden.crops}
                    <br />
                    <button
                      onClick={() => navigate(`/gardens/${garden.id}`)}
                      style={popupButtonStyle}
                    >
                      상세 보기
                    </button>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </section>

        <div style={sectionHeaderStyle}>
          <h2 style={sectionTitleStyle}>공유텃밭</h2>
          <button
            onClick={() => navigate("/garden-register")}
            style={smallButtonStyle}
          >
            + 등록
          </button>
        </div>

        <div style={listStyle}>
          {gardens.map((garden) => (
            <article
              key={garden.id}
              onClick={() => navigate(`/gardens/${garden.id}`)}
              style={cardStyle}
            >
              {garden.imageUrl && (
                <img src={garden.imageUrl} alt={garden.title} style={imageStyle} />
              )}

              <h3 style={cardTitleStyle}>{garden.title}</h3>
              <p style={cardTextStyle}>📍 {garden.location}</p>
              <p style={cardTextStyle}>🌿 {garden.crops}</p>

              <div style={metaStyle}>
                <span>👥 참여 {garden.members ?? 1}명</span>
                <span>{garden.recent ?? "새 텃밭 등록"}</span>
              </div>
            </article>
          ))}
        </div>

        <button
          onClick={() => navigate("/garden-register")}
          style={bigButtonStyle}
        >
          + 공유텃밭 등록
        </button>
      </div>
    </div>
  );
}

const pageStyle = { minHeight: "100vh", background: "#f4f8f1" };
const contentStyle = { maxWidth: 520, margin: "0 auto", padding: 20 };
const headerStyle = { textAlign: "center" as const, marginBottom: 18 };
const titleStyle = {
  margin: 0,
  fontSize: 34,
  color: "#1f3d2b",
  fontWeight: 900,
};
const subTitleStyle = { color: "#5f6f64", marginTop: 8, fontSize: 15 };
const heroStyle = {
  background: "linear-gradient(135deg, #e8f5e9, #ffffff)",
  borderRadius: 28,
  padding: 26,
  marginBottom: 22,
  boxShadow: "0 10px 28px rgba(0,0,0,0.08)",
  textAlign: "center" as const,
};
const heroTitleStyle = {
  fontSize: 22,
  fontWeight: 900,
  color: "#23452f",
  lineHeight: 1.4,
  margin: 0,
};
const heroTextStyle = {
  fontSize: 15,
  color: "#5f6f64",
  lineHeight: 1.7,
};
const mapBoxStyle = {
  height: 300,
  borderRadius: 22,
  overflow: "hidden",
  marginBottom: 24,
  boxShadow: "0 8px 22px rgba(0,0,0,0.08)",
};
const popupButtonStyle = {
  marginTop: 8,
  padding: "7px 10px",
  background: "#3f8f4f",
  color: "white",
  border: "none",
  borderRadius: 8,
  cursor: "pointer",
};
const sectionHeaderStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 12,
};
const sectionTitleStyle = {
  margin: 0,
  color: "#213c2b",
  fontSize: 22,
  fontWeight: 900,
};
const smallButtonStyle = {
  border: "none",
  background: "#3f8f4f",
  color: "white",
  borderRadius: 999,
  padding: "9px 14px",
  fontWeight: 900,
  cursor: "pointer",
};
const listStyle = { display: "grid", gap: 14 };
const cardStyle = {
  background: "#ffffff",
  borderRadius: 22,
  padding: 18,
  boxShadow: "0 6px 18px rgba(0,0,0,0.07)",
  cursor: "pointer",
};
const imageStyle = {
  width: "100%",
  height: 160,
  objectFit: "cover" as const,
  borderRadius: 16,
  marginBottom: 12,
};
const cardTitleStyle = {
  margin: 0,
  fontSize: 21,
  color: "#233d2b",
  fontWeight: 900,
};
const cardTextStyle = { margin: "9px 0", color: "#68766b", fontSize: 15 };
const metaStyle = {
  display: "flex",
  justifyContent: "space-between",
  gap: 8,
  marginTop: 14,
  fontSize: 13,
  color: "#5f6f64",
};
const bigButtonStyle = {
  width: "100%",
  padding: 18,
  borderRadius: 22,
  background: "#3f8f4f",
  color: "white",
  border: "none",
  marginTop: 28,
  fontSize: 18,
  fontWeight: 900,
  cursor: "pointer",
};