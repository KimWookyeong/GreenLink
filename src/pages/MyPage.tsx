import TopTabs from "../components/TopTabs";

export default function MyPage() {
  return (
    <div style={pageStyle}>
      <div style={contentStyle}>
        <h1>🏡 마이페이지</h1>

        <TopTabs />

        <p>내가 참여한 텃밭과 활동을 확인할 수 있습니다.</p>
      </div>
    </div>
  );
}

const pageStyle = { minHeight: "100vh", background: "#f4f8f1" };
const contentStyle = { maxWidth: 420, margin: "0 auto", padding: 20 };