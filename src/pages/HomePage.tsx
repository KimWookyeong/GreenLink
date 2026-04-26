import { useNavigate } from "react-router-dom";
import TopTabs from "../components/TopTabs";
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
        
        {/* 헤더 */}
        <header style={headerStyle}>
          <h1 style={titleStyle}>GreenLink 🌱</h1>
          <p style={subTitleStyle}>지역 공유텃밭 연결·관리 플랫폼</p>
        </header>

        {/* 상단 탭 */}
        <TopTabs />

        {/* 안내 카드 */}
        <section style={heroStyle}>
          <h2 style={heroTitle}>
            유휴공간을 공유텃밭으로
            <br />
            연결해보세요
          </h2>

          <p style={heroText}>
            함께 심고, 함께 기록하고,
            <br />
            수확물을 지역 주민과 나누는
            <br />
            순환형 텃밭 플랫폼입니다.
          </p>
        </section>

        {/* 지도 */}
        <section style={mapStyle}>
          <MapContainer
            center={[35.335, 129.037]}
            zoom={12}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            {gardens.map((g) => (
              <Marker key={g.id} position={[g.lat, g.lng]}>
                <Popup>
                  <strong>{g.title}</strong>
                  <br />
                  {g.location}
                  <br />
                  {g.crops.join(", ")}
                  <br />
                  <button onClick={() => navigate(`/gardens/${g.id}`)}>
                    상세보기
                  </button>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </section>

        {/* 텃밭 리스트 */}
        <h2 style={sectionTitle}>공유텃밭</h2>

        {gardens.map((g) => (
          <div
            key={g.id}
            onClick={() => navigate(`/gardens/${g.id}`)}
            style={cardStyle}
          >
            <h3 style={cardTitle}>{g.title}</h3>

            <p style={cardText}>📍 {g.location}</p>
            <p style={cardText}>🌿 {g.crops.join(", ")}</p>

            <div style={cardBottom}>
              <span>👥 {g.members}명</span>
              <span>{g.recent}</span>
            </div>
          </div>
        ))}

        {/* 등록 버튼 */}
        <button
          onClick={() => navigate("/garden-register")}
          style={mainButton}
        >
          + 공유텃밭 등록
        </button>
      </div>
    </div>
  );
}

/* 스타일 */

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

const heroStyle = {
  background: "linear-gradient(135deg, #e8f5e9, #ffffff)",
  borderRadius: 28,
  padding: 26,
  marginBottom: 22,
  boxShadow: "0 10px 28px rgba(0,0,0,0.08)",
  textAlign: "center" as const,
};

const heroTitle = {
  fontSize: 22,
  fontWeight: 900,
  color: "#23452f",
  lineHeight: 1.4,
};

const heroText = {
  fontSize: 15,
  color: "#5f6f64",
  lineHeight: 1.7,
  marginTop: 10,
};

const mapStyle = {
  height: 220,
  borderRadius: 20,
  overflow: "hidden",
  marginBottom: 20,
  boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
};

const sectionTitle = {
  fontSize: 20,
  marginBottom: 10,
};

const cardStyle = {
  background: "#fff",
  padding: 16,
  borderRadius: 16,
  marginBottom: 12,
  cursor: "pointer",
  boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
};

const cardTitle = {
  margin: 0,
  fontSize: 18,
  fontWeight: 800,
};

const cardText = {
  margin: "6px 0",
  color: "#666",
};

const cardBottom = {
  display: "flex",
  justifyContent: "space-between",
  fontSize: 13,
  marginTop: 10,
};

const mainButton = {
  width: "100%",
  padding: 16,
  background: "#3f8f4f",
  color: "white",
  border: "none",
  borderRadius: 16,
  marginTop: 20,
  fontSize: 16,
  fontWeight: 800,
  cursor: "pointer",
};