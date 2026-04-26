import TopTabs from "../components/TopTabs";

export default function LogPage() {
  return (
    <div style={pageStyle}>
      <div style={contentStyle}>
        <h1>📊 활동 로그</h1>

        <TopTabs />

        <p>전체 텃밭 활동 기록과 통계를 확인할 수 있습니다.</p>
      </div>
    </div>
  );
}

const pageStyle = { minHeight: "100vh", background: "#f4f8f1" };
const contentStyle = { maxWidth: 420, margin: "0 auto", padding: 20 };