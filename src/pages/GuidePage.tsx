import TopTabs from "../components/TopTabs";

export default function GuidePage() {
  return (
    <div style={pageStyle}>
      <div style={contentStyle}>
        <header style={headerStyle}>
          <h1 style={titleStyle}>GreenLink 🌱</h1>
          <p style={subTitleStyle}>공유텃밭 이용 가이드</p>
        </header>

        <TopTabs />

        <section style={visionCardStyle}>
          <h2 style={visionTitleStyle}>
            유휴공간을
            <br />
            푸른 공유텃밭으로
            <br />
            이웃을 더 가깝게
          </h2>

          <div style={visionBoxStyle}>
            <h3 style={smallTitleStyle}>Vision</h3>
            <p style={textStyle}>
              방치된 공간을
              <br />
              생명력 있는 공유텃밭으로 바꾸고,
              <br />
              지역 주민이 함께 참여하는
              <br />
              초록 연결망을 만듭니다.
            </p>
          </div>

          <div style={visionBoxStyle}>
            <h3 style={smallTitleStyle}>Mission</h3>
            <p style={textStyle}>
              함께 심고,
              <br />
              함께 기록하고,
              <br />
              수확물을 나누며
              <br />
              지속가능한 지역 순환 공동체를
              <br />
              만들어갑니다.
            </p>
          </div>
        </section>

        <section style={gridStyle}>
          <InfoCard
            icon="🌱"
            title="그린링크란?"
            lines={[
              "GreenLink는 공유텃밭을",
              "등록하고 함께 관리하는",
              "지역 공유텃밭 플랫폼입니다.",
              "",
              "작물 성장과 수확 나눔을",
              "기록하며 지역의 빈 공간을",
              "초록 공간으로 연결합니다.",
            ]}
          />

          <InfoCard
            icon="🏡"
            title="왜 필요한가요?"
            lines={[
              "도심 속 유휴공간은",
              "그냥 방치되기 쉽습니다.",
              "",
              "하지만 함께 가꾸면",
              "배움과 나눔이 일어나는",
              "지역 공동체 공간으로",
              "바뀔 수 있습니다.",
            ]}
          />

          <InfoCard
            icon="📝"
            title="공동관리 기록"
            lines={[
              "누가, 언제, 무엇을 했는지",
              "함께 기록합니다.",
              "",
              "물주기, 잡초 제거,",
              "비료 주기, 병충해 확인,",
              "수확 활동을 한눈에",
              "확인할 수 있습니다.",
            ]}
          />

          <InfoCard
            icon="📷"
            title="성장 기록"
            lines={[
              "작물이 자라는 과정을",
              "사진과 메모로 남깁니다.",
              "",
              "씨앗을 심은 날부터",
              "싹이 트고 잎이 자라는",
              "변화를 차곡차곡",
              "기록할 수 있습니다.",
            ]}
          />

          <InfoCard
            icon="🎁"
            title="수확 나눔"
            lines={[
              "수확한 작물을",
              "참여자와 지역 주민에게",
              "나눌 수 있습니다.",
              "",
              "필요하면 지역 장터와도",
              "연결하여 작은 순환 경제를",
              "만들 수 있습니다.",
            ]}
          />

          <InfoCard
            icon="🗺️"
            title="지도 기반 연결"
            lines={[
              "공유텃밭의 위치를",
              "지도에서 확인합니다.",
              "",
              "가까운 텃밭을 찾고,",
              "참여하고, 함께 관리하는",
              "시작점이 됩니다.",
            ]}
          />
        </section>

        <section style={twoColumnStyle}>
          <div style={storyCardStyle}>
            <h2 style={sectionTitleStyle}>브랜드 스토리</h2>

            <p style={textStyle}>
              <strong>Green</strong>은
              <br />
              자연, 작물, 생태적 회복을
              <br />
              의미합니다.
            </p>

            <div style={dividerStyle} />

            <p style={textStyle}>
              <strong>Link</strong>는
              <br />
              사람과 사람,
              <br />
              공간과 공동체,
              <br />
              재배와 나눔을
              <br />
              연결한다는 뜻입니다.
            </p>
          </div>

          <div style={storyCardStyle}>
            <h2 style={sectionTitleStyle}>로고 콘셉트</h2>

            <p style={textStyle}>
              GreenLink의 로고는
              <br />
              아직 개발 중입니다.
              <br />
              향후 로고에는
              <br />
              다음 의미를 담을 예정입니다.
            </p>

            <ul style={listStyle}>
              <li>
                🌱 새싹:
                <br />
                유휴공간이 텃밭으로
                <br />
                바뀌는 변화
              </li>
              <li>
                📍 위치:
                <br />
                공유텃밭을 지도 위에서
                <br />
                찾고 연결하는 기능
              </li>
              <li>
                🔗 연결:
                <br />
                주민, 학생, 지역사회가
                <br />
                함께 참여하는 관계
              </li>
              <li>
                🟢 순환:
                <br />
                재배–기록–수확–나눔으로
                <br />
                이어지는 지역 순환
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

function InfoCard({
  icon,
  title,
  lines,
}: {
  icon: string;
  title: string;
  lines: string[];
}) {
  return (
    <div style={cardStyle}>
      <div style={iconStyle}>{icon}</div>
      <h3 style={cardTitleStyle}>{title}</h3>

      <p style={cardTextStyle}>
        {lines.map((line, index) =>
          line === "" ? (
            <br key={index} />
          ) : (
            <span key={index}>
              {line}
              <br />
            </span>
          )
        )}
      </p>
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
  textAlign: "center" as const,
  marginBottom: 18,
};

const titleStyle = {
  margin: 0,
  fontSize: 34,
  color: "#1f3d2b",
  fontWeight: 900,
};

const subTitleStyle = {
  color: "#5f6f64",
  marginTop: 8,
  fontSize: 15,
};

const visionCardStyle = {
  background: "linear-gradient(135deg, #e8f5e9, #ffffff)",
  border: "2px solid #3f8f4f",
  borderRadius: 26,
  padding: 30,
  textAlign: "center" as const,
  marginBottom: 24,
  boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
};

const visionTitleStyle = {
  margin: "0 0 28px",
  color: "#21814d",
  fontSize: 32,
  lineHeight: 1.35,
  fontWeight: 900,
};

const visionBoxStyle = {
  background: "rgba(255,255,255,0.7)",
  borderRadius: 22,
  padding: 22,
  marginBottom: 18,
};

const smallTitleStyle = {
  margin: "0 0 12px",
  color: "#304b38",
  fontSize: 22,
  fontWeight: 900,
};

const textStyle = {
  margin: 0,
  color: "#46564a",
  lineHeight: 1.8,
  fontSize: 17,
  wordBreak: "keep-all" as const,
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: 18,
  marginBottom: 24,
};

const cardStyle = {
  background: "#ffffff",
  borderRadius: 24,
  padding: 24,
  boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
  border: "1px solid #e3ece1",
  textAlign: "center" as const,
};

const iconStyle = {
  fontSize: 32,
  marginBottom: 12,
};

const cardTitleStyle = {
  margin: "0 0 14px",
  color: "#21814d",
  fontSize: 22,
  fontWeight: 900,
};

const cardTextStyle = {
  margin: 0,
  color: "#46564a",
  lineHeight: 1.75,
  fontSize: 16,
  wordBreak: "keep-all" as const,
};

const twoColumnStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: 18,
};

const storyCardStyle = {
  background: "#ffffff",
  borderRadius: 24,
  padding: 26,
  boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
  textAlign: "center" as const,
};

const sectionTitleStyle = {
  margin: "0 0 18px",
  color: "#21814d",
  fontSize: 24,
  fontWeight: 900,
};

const dividerStyle = {
  height: 1,
  background: "#e2ece0",
  margin: "20px 0",
};

const listStyle = {
  margin: "20px 0 0",
  paddingLeft: 0,
  listStylePosition: "inside" as const,
  color: "#46564a",
  lineHeight: 1.8,
  fontSize: 16,
  wordBreak: "keep-all" as const,
  textAlign: "left" as const,
};