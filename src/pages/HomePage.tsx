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
          <h1 style={titleStyle}>GreenLink 🌱</h1>
          <p style={subTitleStyle}>지역 공유텃밭 연결·관리 플랫폼</p>
        </header>

        <div style={topTabStyle}>
        <Route path="/guide" element={<GuidePage />} />
        <Route path="/my" element={<MyPage />} />
        <Route path="/mentor" element={<MentorPage />} />
        <Route path="/log" element={<LogPage />} />
        </div>

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

        <h2 style={sectionTitleStyle}>공유텃밭</h2>

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
    </div>
  );
}

function TopTab({
  label,
  active = false,
  onClick,
}: {
  label: string;
  active?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        flex: 1,
        padding: "13px 0",
        border: "none",
        background: "transparent",
        color: active ? "#2f6f44" : "#7d8b80",
        fontWeight: active ? 900 : 700,
        fontSize: 14,
        borderBottom: active ? "4px solid #3f8f4f" : "4px solid transparent",
        cursor: "pointer",
      }}
    >
      {label}
    </button>
  );
}

const pageStyle = {
  minHeight: "100vh",
  background: "#f4f8f1",
};

const contentStyle = {
  maxWidth: 420,
  margin: "0 auto",
  padding: 20,
};

const headerStyle = {
  textAlign: "center" as const,
  marginBottom: 18,
};

const titleStyle = {
  margin: 0,
  fontSize: 34,
  color: "#1f3d2b",
  fontWeight: 900,
};

const subTitleStyle = {
  color: "#5f6f64",
  marginTop: 8,
  fontSize: 15,
};

const topTabStyle = {
  display: "flex",
  background: "#ffffff",
  borderRadius: 18,
  marginBottom: 20,
  overflow: "hidden",
  boxShadow: "0 5px 16px rgba(0,0,0,0.06)",
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

const sectionTitleStyle = {
  fontSize: 22,
  margin: "0 0 12px",
  color: "#213c2b",
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