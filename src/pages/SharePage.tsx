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

  const [title, setTitle] = useState("");
  const [type, setType] = useState("수확작물");
  const [quantity, setQuantity] = useState("");
  const [method, setMethod] = useState("나눔");
  const [place, setPlace] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState<string | null>(null);

  const [items, setItems] = useState<ShareItem[]>([]);

  const handleSubmit = () => {
    if (!title || !quantity) {
      alert("제목과 수량을 입력해주세요");
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
    setQuantity("");
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

        {/* 설명 */}
        <p style={descStyle}>
          수확한 작물과 텃밭 자원을
          <br />
          이웃과 나누는 공간입니다 🌱
        </p>

        {/* 등록 버튼 */}
        <button
          onClick={() => setShowForm(!showForm)}
          style={mainButton}
        >
          + 나눔 등록하기
        </button>

        {/* 입력 폼 */}
        {showForm && (
          <div style={formStyle}>
            <input
              placeholder="제목 (예: 상추 3봉 나눔)"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={inputStyle}
            />

            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              style={inputStyle}
            >
              <option>수확작물</option>
              <option>씨앗·모종</option>
              <option>비료·흙</option>
              <option>농기구</option>
              <option>기타</option>
            </select>

            <input
              placeholder="수량 (예: 3봉, 5개)"
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
              placeholder="장소 (예: 텃밭 입구)"
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

            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (!file) return;
                setImage(URL.createObjectURL(file));
              }}
            />

            {image && <img src={image} style={imageStyle} />}

            <button onClick={handleSubmit} style={submitButton}>
              등록하기
            </button>
          </div>
        )}

        {/* 목록 */}
        <div style={{ marginTop: 20 }}>
          {items.length === 0 ? (
            <div style={emptyStyle}>
              <div style={{ fontSize: 40 }}>🌱</div>
              <p>아직 나눔이 없습니다</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} style={cardStyle}>
                <h3>{item.title}</h3>

                <p>🌿 {item.type}</p>
                <p>📦 {item.quantity}</p>
                <p>🤝 {item.method}</p>
                {item.place && <p>📍 {item.place}</p>}
                <p>👤 {item.author}</p>

                {item.image && <img src={item.image} style={cardImage} />}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

/* 스타일 */

const pageStyle = { minHeight: "100vh", background: "#f4f8f1" };
const contentStyle = { maxWidth: 420, margin: "0 auto", padding: 20 };

const titleStyle = { fontSize: 26, fontWeight: 900 };
const descStyle = { color: "#666", marginBottom: 12 };

const mainButton = {
  width: "100%",
  padding: 14,
  background: "#3f8f4f",
  color: "white",
  border: "none",
  borderRadius: 14,
  marginBottom: 14,
  fontWeight: 800,
};

const formStyle = {
  background: "#fff",
  padding: 16,
  borderRadius: 16,
  marginBottom: 14,
};

const inputStyle = {
  width: "100%",
  padding: 10,
  marginBottom: 10,
  borderRadius: 10,
  border: "1px solid #ddd",
};

const imageStyle = {
  width: "100%",
  borderRadius: 10,
  marginTop: 10,
};

const submitButton = {
  marginTop: 10,
  width: "100%",
  padding: 12,
  background: "#3f8f4f",
  color: "white",
  border: "none",
  borderRadius: 12,
};

const cardStyle = {
  background: "#fff",
  padding: 14,
  borderRadius: 14,
  marginBottom: 12,
};

const cardImage = {
  width: "100%",
  borderRadius: 10,
  marginTop: 8,
};

const emptyStyle = {
  textAlign: "center" as const,
  padding: 40,
  color: "#999",
};