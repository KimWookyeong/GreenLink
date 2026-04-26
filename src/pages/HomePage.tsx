import { useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const gardens = [
  {
    id: "1",
    title: "양산 중앙 공유텃밭",
    lat: 35.3186,
    lng: 129.0382,
    location: "경남 양산시",
    crops: ["상추", "토마토"],
  },
  {
    id: "2",
    title: "물금 청소년 텃밭",
    lat: 35.3125,
    lng: 129.0345,
    location: "물금읍",
    crops: ["바질", "토마토"],
  },
];

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: 20, background: "#f4f8f1", minHeight: "100vh" }}>
      <div style={{ maxWidth: 420, margin: "0 auto" }}>
        
        {/* 제목 */}
        <h1 style={{ textAlign: "center" }}>
          GreenLink 🌱
        </h1>

        {/* 지도 */}
        <div style={{ height: 250, borderRadius: 16, overflow: "hidden", marginBottom: 20 }}>
          <MapContainer center={[35.3186, 129.0382]} zoom={13} style={{ height: "100%" }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            {gardens.map((g) => (
              <Marker key={g.id} position={[g.lat, g.lng]}>
                <Popup>
                  <div>
                    <strong>{g.title}</strong>
                    <br />
                    {g.location}
                    <br />
                    {g.crops.join(", ")}
                    <br />
                    <button onClick={() => navigate(`/gardens/${g.id}`)}>
                      상세 보기
                    </button>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        {/* 목록 */}
        <h2>공유텃밭</h2>

        {gardens.map((g) => (
          <div
            key={g.id}
            onClick={() => navigate(`/gardens/${g.id}`)}
            style={{
              background: "#fff",
              padding: 16,
              borderRadius: 16,
              marginBottom: 10,
              cursor: "pointer",
            }}
          >
            <h3>{g.title}</h3>
            <p>{g.location}</p>
            <p>{g.crops.join(", ")}</p>
          </div>
        ))}

        {/* 등록 버튼 */}
        <button
          style={{
            width: "100%",
            padding: 14,
            borderRadius: 16,
            background: "#3f8f4f",
            color: "white",
            border: "none",
            marginTop: 20,
          }}
        >
          + 공유텃밭 등록
        </button>

      </div>
    </div>
  );
}