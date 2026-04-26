import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useNavigate } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import TopTabs from "../components/TopTabs";

type Garden = {
  id: number;
  title: string;
  location: string;
  crops: string;
  lat: number;
  lng: number;
};

export default function HomePage() {
  const navigate = useNavigate();

  // 🔥 테스트용 텃밭 데이터 (좌표 포함)
  const gardens: Garden[] = [
    {
      id: 1,
      title: "양산 중앙 공유텃밭",
      location: "경남 양산시",
      crops: "상추, 토마토",
      lat: 35.335,
      lng: 129.037,
    },
    {
      id: 2,
      title: "물금 청소년 텃밭",
      location: "물금읍",
      crops: "바질, 토마토",
      lat: 35.307,
      lng: 129.006,
    },
  ];

  return (
    <div style={pageStyle}>
      <div style={contentStyle}>
        <h1 style={titleStyle}>🌱 GreenLink</h1>

        <TopTabs />

        {/* 지도 */}
        <div style={mapWrapperStyle}>
          <MapContainer
            center={[35.32, 129.02]}
            zoom={13}
            style={mapStyle}
          >
            <TileLayer
              attribution="&copy; OpenStreetMap"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* 🔥 텃밭 핀 표시 */}
            {gardens.map((garden) => (
              <Marker
                key={garden.id}
                position={[garden.lat, garden.lng]}
              >
                <Popup>
                  <div style={{ textAlign: "center" }}>
                    <h3 style={{ margin: "0 0 6px" }}>
                      {garden.title}
                    </h3>

                    <p style={{ margin: "0 0 6px" }}>
                      🌿 {garden.crops}
                    </p>

                    <button
                      onClick={() =>
                        navigate(`/gardens/${garden.id}`)
                      }
                      style={buttonStyle}
                    >
                      상세보기
                    </button>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        {/* 텃밭 리스트 */}
        <div style={{ marginTop: 20 }}>
          {gardens.map((garden) => (
            <div
              key={garden.id}
              style={cardStyle}
              onClick={() => navigate(`/gardens/${garden.id}`)}
            >
              <h3>{garden.title}</h3>
              <p>📍 {garden.location}</p>
              <p>🌿 {garden.crops}</p>
            </div>
          ))}
        </div>
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

const titleStyle = {
  fontSize: 26,
  fontWeight: 900,
  marginBottom: 10,
};

const mapWrapperStyle = {
  height: 300,
  borderRadius: 16,
  overflow: "hidden",
};

const mapStyle = {
  height: "100%",
  width: "100%",
};

const cardStyle = {
  background: "#fff",
  padding: 14,
  borderRadius: 14,
  marginBottom: 10,
  cursor: "pointer",
};

const buttonStyle = {
  marginTop: 6,
  padding: "6px 10px",
  background: "#3f8f4f",
  color: "white",
  border: "none",
  borderRadius: 8,
};