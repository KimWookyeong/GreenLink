import TopTabs from "../components/TopTabs";
import { useNavigate } from "react-router-dom";

export default function MyPage() {
  const navigate = useNavigate();

  return (
    <div style={pageStyle}>
      <div style={contentStyle}>
        <header style={headerStyle}>
          <h1 style={titleStyle}>🏡 내 텃밭 관리</h1>
          <button
            onClick={() => navigate("/garden-register")}
            style={registerButtonStyle}
          >
            🌱 공유텃밭 등록하기
          </button>
        </header>

        <TopTabs />

        <section style={profileCardStyle}>
          <div style={avatarStyle}>👩‍🌾</div>

          <div style={{ flex: 1 }}>
            <h2 style={nameStyle}>Kim WK</h2>
            <p style={textStyle}>오늘도 건강한 공유텃밭을 가꿔보세요!</p>

            <div style={statGridStyle}>
              <StatBox icon="🌱" label="운영 텃밭" value="0곳" />
              <StatBox icon="💧" label="공동관리" value="0회" />
              <StatBox icon="⭐" label="활동 점수" value="0점" />
            </div>
          </div>
        </section>

        <section style={emptyGardenStyle}>
          <h2 style={sectionTitleStyle}>내 공유텃밭</h2>
          <div style={emptyBoxStyle}>
            <div style={{ fontSize: 36 }}>🌱</div>
            <p style={emptyTitleStyle}>아직 등록한 공유텃밭이 없습니다.</p>
            <p style={emptyTextStyle}>
              공유텃밭을 등록하고 함께 관리해보세요.
            </p>
          </div>
        </section>

        <section style={noteHeaderStyle}>
          <div>
            <h2 style={sectionTitleStyle}>📓 그린 노트</h2>
            <p style={smallTextStyle}>나의 텃밭 활동 기록</p>
          </div>

          <button style={noteButtonStyle}>✏️ 기록 작성하기</button>
        </section>

        <section style={noteCardStyle}>
          <div style={{ fontSize: 36 }}>📓</div>
          <p style={emptyTitleStyle}>아직 작성된 기록이 없습니다.</p>
          <p style={emptyTextStyle}>
            공동관리, 성장 기록, 수확 나눔 활동이 이곳에 표시됩니다.
          </p>
        </section>

        <section style={indexCardStyle}>
          <div style={indexHeaderStyle}>
            <div>
              <h2 style={sectionTitleStyle}>📈 친환경 텃밭 지수</h2>
              <p style={smallTextStyle}>활동 기록을 바탕으로 자동 계산됩니다.</p>
            </div>

            <select style={selectStyle}>
              <option>전체 텃밭</option>
              <option>양산 중앙 공유텃밭</option>
              <option>물금 청소년 텃밭</option>
            </select>
          </div>

          <div style={emptyChartStyle}>
            <div style={{ fontSize: 42 }}>🌱</div>
            <p style={emptyTitleStyle}>아직 기록이 없습니다.</p>
            <p style={emptyTextStyle}>
              공동관리 기록을 작성하면 지수가 표시됩니다.
            </p>
          </div>

          <div style={historyStyle}>
            <h3 style={historyTitleStyle}>🗓 입력 이력</h3>
            <p style={emptyTextStyle}>기록 없음</p>
          </div>
        </section>
      </div>
    </div>
  );
}

function StatBox({
  icon,
  label,
  value,
}: {
  icon: string;
  label: string;
  value: string;
}) {
  return (
    <div style={statBoxStyle}>
      <span>{icon}</span>
      <strong>{label}: </strong>
      <span>{value}</span>
    </div>
  );
}

const pageStyle = {
  minHeight: "100vh",
  background: "#f4f8f1",
};

const contentStyle = {
  maxWidth: 980,
  margin: "0 auto",
  padding: 20,
};

const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 16,
};

const titleStyle = {
  margin: 0,
  color: "#1f3d2b",
  fontSize: 26,
  fontWeight: 900,
};

const registerButtonStyle = {
  border: "none",
  background: "#3f8f4f",
  color: "white",
  padding: "12px 18px",
  borderRadius: 14,
  fontWeight: 900,
  cursor: "pointer",
};

const profileCardStyle = {
  display: "flex",
  gap: 22,
  alignItems: "center",
  background: "linear-gradient(135deg, #e8f5e9, #ffffff)",
  border: "2px solid #3f8f4f",
  borderRadius: 24,
  padding: 24,
  marginBottom: 24,
  boxShadow: "0 8px 22px rgba(0,0,0,0.06)",
};

const avatarStyle = {
  width: 78,
  height: 78,
  borderRadius: "50%",
  background: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 42,
  boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
  flexShrink: 0,
};

const nameStyle = {
  margin: "0 0 8px",
  color: "#21814d",
  fontSize: 24,
};

const textStyle = {
  margin: "0 0 14px",
  color: "#46564a",
  lineHeight: 1.6,
};

const statGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
  gap: 10,
};

const statBoxStyle = {
  background: "#ffffff",
  border: "1px solid #dbe8d8",
  borderRadius: 12,
  padding: 12,
  color: "#304b38",
};

const emptyGardenStyle = {
  marginBottom: 24,
};

const sectionTitleStyle = {
  margin: "0 0 10px",
  color: "#1f3d2b",
  fontSize: 22,
  fontWeight: 900,
};

const emptyBoxStyle = {
  border: "1px dashed #c8d4c6",
  borderRadius: 18,
  padding: 36,
  textAlign: "center" as const,
  background: "rgba(255,255,255,0.5)",
};

const emptyTitleStyle = {
  margin: "10px 0 4px",
  color: "#7b887e",
  fontSize: 16,
};

const emptyTextStyle = {
  margin: 0,
  color: "#9aa39c",
  fontSize: 14,
};

const noteHeaderStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 12,
};

const smallTextStyle = {
  margin: 0,
  color: "#7b887e",
  fontSize: 14,
};

const noteButtonStyle = {
  border: "none",
  background: "#3f8f4f",
  color: "white",
  padding: "12px 18px",
  borderRadius: 14,
  fontWeight: 900,
  cursor: "pointer",
};

const noteCardStyle = {
  background: "#ffffff",
  border: "1px dashed #d1d8d0",
  borderRadius: 20,
  padding: 36,
  textAlign: "center" as const,
  marginBottom: 24,
};

const indexCardStyle = {
  background: "#ffffff",
  border: "1px solid #b9dfbd",
  borderRadius: 20,
  overflow: "hidden",
  marginBottom: 24,
};

const indexHeaderStyle = {
  display: "flex",
  justifyContent: "space-between",
  gap: 12,
  alignItems: "center",
  background: "#e8f5e9",
  padding: 20,
};

const selectStyle = {
  padding: "10px 14px",
  borderRadius: 12,
  border: "1px solid #8fcf99",
  color: "#2f6f44",
  fontWeight: 800,
  background: "white",
};

const emptyChartStyle = {
  margin: 24,
  padding: 42,
  borderRadius: 20,
  textAlign: "center" as const,
  background: "#fafafa",
};

const historyStyle = {
  borderTop: "1px solid #e5eee3",
  padding: 20,
};

const historyTitleStyle = {
  margin: "0 0 16px",
  color: "#2f6f44",
  fontSize: 18,
};