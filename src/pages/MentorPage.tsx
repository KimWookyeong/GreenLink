import TopTabs from "../components/TopTabs";

export default function MentorPage() {
  return (
    <div style={pageStyle}>
      <div style={contentStyle}>
        <h1>💡 멘토</h1>

        <TopTabs />

        <p>텃밭 관련 질문과 재배 팁을 공유하는 공간입니다.</p>
      </div>
    </div>
  );
}

const pageStyle = { minHeight: "100vh", background: "#f4f8f1" };
const contentStyle = { maxWidth: 420, margin: "0 auto", padding: 20 };