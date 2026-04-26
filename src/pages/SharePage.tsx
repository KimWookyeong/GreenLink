import { useState } from "react";
import TopTabs from "../components/TopTabs";

type ShareItem = {
  id: number;
  title: string;
  type: string;
  quantity: string;
  method: string;
  place: string;
  author: string;
  image?: string;
};

export default function SharePage() {
  const [showForm, setShowForm] = useState(false);
  const [items, setItems] = useState<ShareItem[]>([]);

  const [title, setTitle] = useState("");
  const [type, setType] = useState("수확작물");
  const [quantity, setQuantity] = useState("");
  const [method, setMethod] = useState("나눔");
  const [place, setPlace] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState<string | null>(null);

  const handleImageUpload = (file?: File) => {
    if (!file) return;
    setImage(URL.createObjectURL(file));
  };

  const handleSubmit = () => {
    if (!title || !quantity) {
      alert("제목과 수량을 입력해주세요.");
      return;
    }

    const newItem: ShareItem = {
      id: Date.now(),
      title,
      type,
      quantity,
      method,
      place,
      author: author || "익명",
      image: image || undefined,
    };

    setItems([newItem, ...items]);
    setTitle("");
    setType("수확작물");
    setQuantity("");
    setMethod("나눔");
    setPlace("");
    setAuthor("");
    setImage(null);
    setShowForm(false);
  };

  return (
    <div style={pageStyle}>
      <div style={contentStyle}>
        <h1 style={titleStyle}>🤝 나눔 장터</h1>

        <TopTabs />

        <p style={descStyle}>
          수확한 작물과 텃밭 자원을
          <br />
          이웃과 나누는 공간입니다.
        </p>

        <button onClick={() => setShowForm(!showForm)} style={mainButton}>
          + 나눔 등록하기
        </button>

        {showForm && (
          <div style={formStyle}>
            <input
              placeholder="제목 예: 상추 3봉 나눔"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={inputStyle}
            />

            <select value={type} onChange={(e) => setType(e.target.value)} style={inputStyle}>
              <option>수확작물</option>
              <option>씨앗·모종</option>
              <option>비료·흙</option>
              <option>농기구</option>
              <option>기타</option>
            </select>

            <input
              placeholder="수량 예: 3봉, 5개"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              style={inputStyle}
            />

            <select
              value={method}
              onChange={(e) => setMethod(e.target.value)}
              style={inputStyle}
            >
              <option>나눔</option>
              <option>판매</option>
              <option>교환</option>
            </select>

            <input
              placeholder="장소 예: 텃밭 입구"
              value={place}
              onChange={(e) => setPlace(e.target.value)}
              style={inputStyle}
            />

            <input
              placeholder="작성자"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              style={inputStyle}
            />

            <div style={photoButtonRowStyle}>
              <label style={photoButtonStyle}>
                📷 카메라 촬영
                <input
                  type="file"
                  accept="image/*"
                  capture="environment"
                  onChange={(e) => handleImageUpload(e.target.files?.[0])}
                  style={{ display: "none" }}
                />
              </label>

              <label style={photoButtonStyle}>
                🖼 갤러리 선택
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageUpload(e.target.files?.[0])}
                  style={{ display: "none" }}
                />
              </label>
            </div>

            {image && <img src={image} alt="나눔 사진" style={imageStyle} />}

            <button onClick={handleSubmit} style={submitButton}>
              등록하기
            </button>
          </div>
        )}

        <div style={{ marginTop: 20 }}>
          {items.length === 0 ? (
            <div style={emptyStyle}>
              <div style={{ fontSize: 40 }}>🌱</div>
              <p>아직 나눔이 없습니다.</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} style={cardStyle}>
                <h3 style={cardTitleStyle}>{item.title}</h3>
                <p>🌿 {item.type}</p>
                <p>📦 {item.quantity}</p>
                <p>🤝 {item.method}</p>
                {item.place && <p>📍 {item.place}</p>}
                <p>👤 {item.author}</p>
                {item.image && <img src={item.image} alt={item.title} style={cardImage} />}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

const pageStyle = { minHeight: "100vh", background: "#f4f8f1" };
const contentStyle = { maxWidth: 520, margin: "0 auto", padding: 20 };
const titleStyle = { fontSize: 28, fontWeight: 900, color: "#1f3d2b" };
const descStyle = { color: "#5f6f64", marginBottom: 12, lineHeight: 1.6 };
const mainButton = {
  width: "100%",
  padding: 14,
  background: "#3f8f4f",
  color: "white",
  border: "none",
  borderRadius: 14,
  marginBottom: 14,
  fontWeight: 900,
  cursor: "pointer",
};
const formStyle = {
  background: "#fff",
  padding: 16,
  borderRadius: 16,
  marginBottom: 14,
  boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
};
const inputStyle = {
  width: "100%",
  padding: 12,
  marginBottom: 10,
  borderRadius: 12,
  border: "1px solid #ddd",
  boxSizing: "border-box" as const,
};
const photoButtonRowStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: 10,
  marginTop: 6,
};
const photoButtonStyle = {
  padding: 13,
  borderRadius: 14,
  border: "1px solid #3f8f4f",
  background: "#ffffff",
  color: "#2f6f44",
  fontWeight: 900,
  textAlign: "center" as const,
  cursor: "pointer",
};
const imageStyle = { width: "100%", borderRadius: 12, marginTop: 10 };
const submitButton = {
  marginTop: 12,
  width: "100%",
  padding: 13,
  background: "#3f8f4f",
  color: "white",
  border: "none",
  borderRadius: 12,
  fontWeight: 900,
  cursor: "pointer",
};
const cardStyle = {
  background: "#fff",
  padding: 16,
  borderRadius: 16,
  marginBottom: 12,
  boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
};
const cardTitleStyle = { color: "#1f3d2b", marginTop: 0 };
const cardImage = { width: "100%", borderRadius: 12, marginTop: 8 };
const emptyStyle = {
  textAlign: "center" as const,
  padding: 40,
  color: "#999",
  background: "#fff",
  borderRadius: 16,
};