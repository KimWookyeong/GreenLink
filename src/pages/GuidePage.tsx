import TopTabs from "../components/TopTabs";

export default function GuidePage() {
  return (
    <div style={pageStyle}>
      <div style={contentStyle}>
        <h1>🌱 이용 가이드</h1>

        <TopTabs />

        <p>그린링크는 공유텃밭을 연결하고 함께 관리하는 플랫폼입니다.</p>

        <ul>
          <li>텃밭 등록하기</li>
          <li>함께 관리 기록하기</li>
          <li>작물 성장 기록</li>
          <li>수확 나눔</li>
        </ul>
      </div>
    </div>
  );
}

const pageStyle = { minHeight: "100vh", background: "#f4f8f1" };
const contentStyle = { maxWidth: 420, margin: "0 auto", padding: 20 };