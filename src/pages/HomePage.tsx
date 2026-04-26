import { useNavigate } from "react-router-dom";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const gardens = [
  {
    id: "1",
    title: "양산 중앙 공유텃밭",
    location: "경남 양산시",
    crops: ["상추", "토마토"],
    members: 8,
    recent: "오늘 오전 물주기 완료",
    lat: 35.335,
    lng: 129.037,
  },
  {
    id: "2",
    title: "물금 청소년 텃밭",
    location: "경남 양산시 물금읍",
    crops: ["바질", "토마토"],
    members: 5,
    recent: "상추 성장 기록 추가",
    lat: 35.31,
    lng: 129.01,
  },
];

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div style={pageStyle}>
      <div style={contentStyle}>
        <header style={headerStyle}>
          <h1 style={logoStyle}>GreenLink 🌱</h1>
          <p style={subTitleStyle}>지역 공유텃밭 연결·관리 플랫폼</p>
        </header>

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
            center={[35.335, 129.037]}
            zoom={12}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            {gardens.map((garden) => (
              <Marker key={garden.id} position={[garden.lat, garden.lng]}>
                <Popup>
                  <strong>{garden.title}</strong>
                  <br />
                  {garden.location}
                  <br />
                  {garden.crops.join(", ")}
                  <br />
                  <button onClick={() => navigate(`/gardens/${garden.id}`)}>
                    상세 보기
                  </button>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </section>

        <div style={sectionHeaderStyle}>
          <h2 style={sectionTitleStyle}>공유텃밭</h2>

          <button
            onClick={() => navigate("/garden-register")}
            style={smallAddButtonStyle}
          >
            + 등록
          </button>
        </div>

        <div style={{ display: "grid", gap: 14 }}>
          {gardens.map((garden) => (
            <div
              key={garden.id}
              onClick={() => navigate(`/gardens/${garden.id}`)}
              style={gardenCardStyle}
            >
              <h3 style={gardenTitleStyle}>{garden.title}</h3>

              <p style={gardenTextStyle}>📍 {garden.location}</p>
              <p style={gardenTextStyle}>🌿 {garden.crops.join(", ")}</p>

              <div style={gardenMetaStyle}>
                <span>👥 참여 {garden.members}명</span>
                <span>{garden.recent}</span>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => navigate("/garden-register")}
          style={bigAddButtonStyle}
        >
          + 공유텃밭 등록
        </button>
      </div>

      <BottomTabs />
    </div>
  );
}

function BottomTabs() {
  return (
    <nav style={bottomTabStyle}>
      <TabItem label="가이드" icon="🌱" />
      <TabItem label="파밍" icon="🗺️" active />
      <TabItem label="마이" icon="🏡" />
      <TabItem label="멘토" icon="💡" />
      <TabItem label="로그" icon="📊" />
    </nav>
  );
}

function TabItem({
  label,
  icon,
  active = false,
}: {
  label: string;
  icon: string;
  active?: boolean;
}) {
  return (
    <div style={tabItemStyle}>
      <div style={{ fontSize: 22 }}>{icon}</div>
      <div
        style={{
          fontSize: 13,
          fontWeight: active ? 900 : 700,
          color: active ? "#2f6f44" : "#8a958c",
          marginTop: 4,
        }}
      >
        {label}
      </div>

      {active && <div style={activeBarStyle} />}
    </div>
  );
}

const pageStyle = {
  minHeight: "100vh",
  background: "#f4f8f1",
  padding: "20px 20px 92px",
  boxSizing: "border-box" as const,
};

const contentStyle = {
  maxWidth: 420,
  margin: "0 auto",
};

const headerStyle = {
  textAlign: "center" as const,
  marginBottom: 22,
};

const logoStyle = {
  margin: 0,
  fontSize: 36,
  color: "#1f3d2b",
  fontWeight: 900,
};

const subTitleStyle = {
  color: "#5f6f64",
  marginTop: 8,
  fontSize: 15,
};

const heroStyle = {
  background: "linear-gradient(135deg, #e8f5e9, #ffffff)",
  borderRadius: 28,
  padding: 26,
  marginBottom: 22,
  boxShadow: "0 10px 28px rgba(0,0,0,0.08)",
  textAlign: "center" as const,
};

const heroTitleStyle = {
  fontSize: 24,
  fontWeight: 900,
  color: "#23452f",
  lineHeight: 1.4,
  margin: "0 0 12px",
};

const heroTextStyle = {
  fontSize: 15,
  color: "#5f6f64",
  lineHeight: 1.7,
  maxWidth: 280,
  margin: "0 auto",
};

const mapBoxStyle = {
  height: 240,
  borderRadius: 24,
  overflow: "hidden",
  marginBottom: 24,
  boxShadow: "0 8px 22px rgba(0,0,0,0.08)",
  background: "#dbe9d4",
};

const sectionHeaderStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 12,
};

const sectionTitleStyle = {
  fontSize: 22,
  margin: 0,
  color: "#213c2b",
};

const smallAddButtonStyle = {
  border: "none",
  background: "#3f8f4f",
  color: "white",
  borderRadius: 999,
  padding: "9px 14px",
  fontWeight: 800,
  cursor: "pointer",
};

const gardenCardStyle = {
  background: "#ffffff",
  borderRadius: 22,
  padding: 20,
  boxShadow: "0 6px 18px rgba(0,0,0,0.07)",
  cursor: "pointer",
};

const gardenTitleStyle = {
  margin: 0,
  fontSize: 21,
  color: "#233d2b",
};

const gardenTextStyle = {
  margin: "9px 0",
  color: "#68766b",
  fontSize: 16,
};

const gardenMetaStyle = {
  display: "flex",
  justifyContent: "space-between",
  gap: 8,
  marginTop: 14,
  fontSize: 13,
  color: "#5f6f64",
};

const bigAddButtonStyle = {
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

const bottomTabStyle = {
  position: "fixed" as const,
  bottom: 0,
  left: 0,
  right: 0,
  height: 74,
  background: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  borderTop: "1px solid #e5e5e5",
  boxShadow: "0 -4px 18px rgba(0,0,0,0.06)",
  zIndex: 999,
};

const tabItemStyle = {
  flex: 1,
  height: "100%",
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "center",
  justifyContent: "center",
  position: "relative" as const,
};

const activeBarStyle = {
  position: "absolute" as const,
  bottom: 0,
  width: "70%",
  height: 4,
  borderRadius: 999,
  background: "#3f8f4f",
};