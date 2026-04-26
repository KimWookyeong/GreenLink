import TopTabs from "../components/TopTabs";

const logs = [
  {
    id: 1,
    type: "공동관리",
    icon: "💧",
    title: "상추 구역 물주기 완료",
    garden: "양산 중앙 공유텃밭",
    author: "김우경",
    date: "2026. 4. 22.",
  },
  {
    id: 2,
    type: "성장기록",
    icon: "🌱",
    title: "상추 새싹 확인",
    garden: "양산 중앙 공유텃밭",
    author: "민지",
    date: "2026. 4. 25.",
  },
  {
    id: 3,
    type: "수확나눔",
    icon: "🎁",
    title: "상추 3봉 나눔 등록",
    garden: "우리동네 나눔밭",
    author: "수아",
    date: "2026. 5. 1.",
  },
];

export default function LogPage() {
  return (
    <div style={pageStyle}>
      <div style={contentStyle}>
        <header style={headerStyle}>
          <h1 style={titleStyle}>📊 활동 로그</h1>
          <p style={subTitleStyle}>
            공유텃밭의 관리, 성장, 수확 나눔 기록을 한눈에 확인합니다.
          </p>
        </header>

        <TopTabs />

        <section style={summaryGridStyle}>
          <StatCard icon="🏡" label="등록 텃밭" value="3곳" />
          <StatCard icon="💧" label="공동관리" value="12회" />
          <StatCard icon="🌱" label="성장기록" value="8건" />
          <StatCard icon="🎁" label="나눔게시" value="5건" />
        </section>

        <section style={chartCardStyle}>
          <h2 style={sectionTitleStyle}>활동 유형 비율</h2>

          <ProgressItem label="공동관리" value={45} />
          <ProgressItem label="성장기록" value={30} />
          <ProgressItem label="수확나눔" value={25} />
        </section>

        <section style={filterCardStyle}>
          <button style={activeFilterStyle}>전체</button>
          <button style={filterButtonStyle}>공동관리</button>
          <button style={filterButtonStyle}>성장기록</button>
          <button style={filterButtonStyle}>수확나눔</button>
        </section>

        <section style={logListStyle}>
          {logs.map((log) => (
            <article key={log.id} style={logCardStyle}>
              <div style={logIconStyle}>{log.icon}</div>

              <div style={{ flex: 1 }}>
                <div style={logTopStyle}>
                  <span style={badgeStyle}>{log.type}</span>
                  <span style={dateStyle}>{log.date}</span>
                </div>

                <h3 style={logTitleStyle}>{log.title}</h3>
                <p style={logTextStyle}>텃밭: {log.garden}</p>
                <p style={logTextStyle}>작성자: {log.author}</p>
              </div>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}

function StatCard({
  icon,
  label,
  value,
}: {
  icon: string;
  label: string;
  value: string;
}) {
  return (
    <div style={statCardStyle}>
      <div style={statIconStyle}>{icon}</div>
      <div style={statValueStyle}>{value}</div>
      <div style={statLabelStyle}>{label}</div>
    </div>
  );
}

function ProgressItem({ label, value }: { label: string; value: number }) {
  return (
    <div style={progressWrapStyle}>
      <div style={progressLabelStyle}>
        <span>{label}</span>
        <strong>{value}%</strong>
      </div>

      <div style={progressBgStyle}>
        <div style={{ ...progressFillStyle, width: `${value}%` }} />
      </div>
    </div>
  );
}

const pageStyle = {
  minHeight: "100vh",
  background: "#f4f8f1",
};

const contentStyle = {
  maxWidth: 760,
  margin: "0 auto",
  padding: 20,
};

const headerStyle = {
  marginBottom: 16,
};

const titleStyle = {
  margin: 0,
  color: "#1f3d2b",
  fontSize: 28,
  fontWeight: 900,
};

const subTitleStyle = {
  margin: "8px 0 0",
  color: "#5f6f64",
  fontSize: 15,
  lineHeight: 1.5,
};

const summaryGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: 12,
  marginBottom: 20,
};

const statCardStyle = {
  background: "#ffffff",
  borderRadius: 20,
  padding: 18,
  textAlign: "center" as const,
  boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
};

const statIconStyle = {
  fontSize: 28,
  marginBottom: 8,
};

const statValueStyle = {
  color: "#21814d",
  fontSize: 24,
  fontWeight: 900,
};

const statLabelStyle = {
  color: "#6b786e",
  fontSize: 14,
  marginTop: 4,
};

const chartCardStyle = {
  background: "#ffffff",
  borderRadius: 22,
  padding: 20,
  marginBottom: 18,
  boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
};

const sectionTitleStyle = {
  margin: "0 0 16px",
  color: "#1f3d2b",
  fontSize: 21,
  fontWeight: 900,
};

const progressWrapStyle = {
  marginBottom: 14,
};

const progressLabelStyle = {
  display: "flex",
  justifyContent: "space-between",
  color: "#405143",
  fontSize: 14,
  marginBottom: 6,
};

const progressBgStyle = {
  height: 12,
  background: "#e5eee3",
  borderRadius: 999,
  overflow: "hidden",
};

const progressFillStyle = {
  height: "100%",
  background: "#3f8f4f",
  borderRadius: 999,
};

const filterCardStyle = {
  display: "flex",
  gap: 8,
  overflowX: "auto" as const,
  marginBottom: 18,
};

const activeFilterStyle = {
  border: "none",
  background: "#3f8f4f",
  color: "white",
  padding: "10px 14px",
  borderRadius: 999,
  fontWeight: 800,
  cursor: "pointer",
  whiteSpace: "nowrap" as const,
};

const filterButtonStyle = {
  border: "1px solid #d7e2d4",
  background: "white",
  color: "#5f6f64",
  padding: "10px 14px",
  borderRadius: 999,
  fontWeight: 800,
  cursor: "pointer",
  whiteSpace: "nowrap" as const,
};

const logListStyle = {
  display: "grid",
  gap: 14,
};

const logCardStyle = {
  display: "flex",
  gap: 14,
  background: "#ffffff",
  borderRadius: 22,
  padding: 18,
  boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
};

const logIconStyle = {
  width: 52,
  height: 52,
  borderRadius: "50%",
  background: "#e8f5e9",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 26,
  flexShrink: 0,
};

const logTopStyle = {
  display: "flex",
  justifyContent: "space-between",
  gap: 10,
  alignItems: "center",
};

const badgeStyle = {
  background: "#e8f5e9",
  color: "#2f6f44",
  padding: "5px 9px",
  borderRadius: 999,
  fontSize: 12,
  fontWeight: 900,
};

const dateStyle = {
  color: "#8a958c",
  fontSize: 12,
};

const logTitleStyle = {
  margin: "10px 0 8px",
  color: "#203728",
  fontSize: 18,
};

const logTextStyle = {
  margin: "4px 0",
  color: "#657568",
  fontSize: 14,
};