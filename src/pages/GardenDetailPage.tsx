import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function GardenDetailPage() {
  const { gardenId } = useParams();
  const navigate = useNavigate();

  const [tab, setTab] = useState<"activity" | "growth" | "harvest">(
    "activity"
  );

  // Firebase 연결 전 임시 관리자 설정
  const isAdmin = true;

  const handleDeleteGarden = () => {
    const confirmDelete = confirm("정말 이 텃밭을 삭제하시겠습니까?");
    if (!confirmDelete) return;

    alert("텃밭이 삭제되었습니다. 현재는 테스트 기능입니다.");
    navigate("/home");
  };

  return (
    <div style={{ minHeight: "100vh", background: "#f4f8f1", padding: 20 }}>
      <div style={{ maxWidth: 420, margin: "0 auto" }}>
        <button onClick={() => navigate("/home")} style={backButtonStyle}>
          ← 메인으로 돌아가기
        </button>

        <section style={gardenInfoStyle}>
          <p style={smallTextStyle}>공유텃밭 ID: {gardenId}</p>

          <h1 style={titleStyle}>🌱 양산 중앙 공유텃밭</h1>

          <p style={infoTextStyle}>📍 경남 양산시</p>
          <p style={infoTextStyle}>🌿 상추, 토마토</p>
          <p style={infoTextStyle}>👥 참여자 8명</p>
          <p style={infoTextStyle}>🗓 수확 예정일: 2026-05-20</p>

          {isAdmin && (
            <button onClick={handleDeleteGarden} style={deleteButtonStyle}>
              🗑 텃밭 삭제 (관리자)
            </button>
          )}
        </section>

        <div style={tabWrapStyle}>
          <TabButton
            text="공동관리"
            value="activity"
            tab={tab}
            setTab={setTab}
          />
          <TabButton
            text="성장기록"
            value="growth"
            tab={tab}
            setTab={setTab}
          />
          <TabButton
            text="수확나눔"
            value="harvest"
            tab={tab}
            setTab={setTab}
          />
        </div>

        {tab === "activity" && <ActivityTab isAdmin={isAdmin} />}
        {tab === "growth" && <GrowthTab isAdmin={isAdmin} />}
        {tab === "harvest" && <HarvestTab isAdmin={isAdmin} />}
      </div>
    </div>
  );
}

function TabButton({
  text,
  value,
  tab,
  setTab,
}: {
  text: string;
  value: "activity" | "growth" | "harvest";
  tab: "activity" | "growth" | "harvest";
  setTab: React.Dispatch<React.SetStateAction<"activity" | "growth" | "harvest">>;
}) {
  const selected = tab === value;

  return (
    <button
      onClick={() => setTab(value)}
      style={{
        flex: 1,
        padding: 12,
        borderRadius: 16,
        border: "none",
        background: selected ? "#3f8f4f" : "#e0e7dd",
        color: selected ? "white" : "#304b38",
        fontWeight: 800,
        fontSize: 15,
        cursor: "pointer",
      }}
    >
      {text}
    </button>
  );
}

function ActivityTab({ isAdmin }: { isAdmin: boolean }) {
  return (
    <section>
      <h2 style={sectionTitleStyle}>📋 공동관리 기록</h2>

      <button style={addButtonStyle}>+ 공동관리 기록 추가</button>

      <RecordCard
        title="물주기"
        date="2026-04-22"
        memo="상추 전체 물주기 완료"
        user="김우경"
        isAdmin={isAdmin}
      />

      <RecordCard
        title="잡초 제거"
        date="2026-04-21"
        memo="토마토 주변 정리"
        user="민지"
        isAdmin={isAdmin}
      />
    </section>
  );
}

function GrowthTab({ isAdmin }: { isAdmin: boolean }) {
  return (
    <section>
      <h2 style={sectionTitleStyle}>🌱 작물 성장 기록</h2>

      <button style={addButtonStyle}>+ 성장 기록 추가</button>

      <RecordCard
        title="상추"
        date="2026-04-20"
        memo="씨앗을 심었습니다."
        user="김우경"
        isAdmin={isAdmin}
      />

      <RecordCard
        title="상추"
        date="2026-04-25"
        memo="싹이 올라왔습니다. 약 2cm 정도 자랐습니다."
        user="민지"
        isAdmin={isAdmin}
      />
    </section>
  );
}

function HarvestTab({ isAdmin }: { isAdmin: boolean }) {
  return (
    <section>
      <h2 style={sectionTitleStyle}>🍅 수확 나눔</h2>

      <button style={addButtonStyle}>+ 수확 나눔 등록</button>

      <RecordCard
        title="상추 나눔"
        date="오늘"
        memo="상추 3봉 나눔 가능합니다. 텃밭 참여자 우선 나눔 예정입니다."
        user="수아"
        isAdmin={isAdmin}
      />

      <RecordCard
        title="방울토마토 판매 예정"
        date="예정"
        memo="지역장터 판매를 준비 중입니다."
        user="지훈"
        isAdmin={isAdmin}
      />
    </section>
  );
}

function RecordCard({
  title,
  date,
  memo,
  user,
  isAdmin,
}: {
  title: string;
  date: string;
  memo: string;
  user: string;
  isAdmin: boolean;
}) {
  const handleDeleteRecord = () => {
    const confirmDelete = confirm("이 기록을 삭제하시겠습니까?");
    if (!confirmDelete) return;

    alert("기록이 삭제되었습니다. 현재는 테스트 기능입니다.");
  };

  return (
    <div style={recordCardStyle}>
      <h3 style={recordTitleStyle}>{title}</h3>
      <p style={recordDateStyle}>{date}</p>
      <p style={recordMemoStyle}>{memo}</p>
      <p style={recordUserStyle}>작성자: {user}</p>

      {isAdmin && (
        <button onClick={handleDeleteRecord} style={smallDeleteButtonStyle}>
          삭제
        </button>
      )}
    </div>
  );
}

const backButtonStyle = {
  border: "none",
  background: "transparent",
  color: "#3f8f4f",
  fontWeight: 800,
  fontSize: 16,
  marginBottom: 16,
  cursor: "pointer",
};

const gardenInfoStyle = {
  background: "#ffffff",
  borderRadius: 24,
  padding: 22,
  boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
  marginBottom: 20,
};

const smallTextStyle = {
  margin: 0,
  marginBottom: 8,
  color: "#8a958c",
  fontSize: 13,
};

const titleStyle = {
  margin: 0,
  marginBottom: 12,
  color: "#203728",
  fontSize: 25,
};

const infoTextStyle = {
  margin: "8px 0",
  color: "#5f6f64",
  fontSize: 16,
};

const deleteButtonStyle = {
  width: "100%",
  marginTop: 18,
  padding: 13,
  borderRadius: 16,
  border: "none",
  background: "#e74c3c",
  color: "white",
  fontSize: 16,
  fontWeight: 800,
  cursor: "pointer",
};

const tabWrapStyle = {
  display: "flex",
  gap: 10,
  marginBottom: 22,
};

const sectionTitleStyle = {
  textAlign: "center" as const,
  color: "#304b38",
  fontSize: 24,
  margin: "20px 0",
};

const addButtonStyle = {
  width: "100%",
  padding: 15,
  borderRadius: 18,
  border: "none",
  background: "#3f8f4f",
  color: "white",
  fontSize: 17,
  fontWeight: 800,
  cursor: "pointer",
  marginBottom: 16,
};

const recordCardStyle = {
  background: "#ffffff",
  borderRadius: 22,
  padding: 20,
  marginBottom: 16,
  boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
};

const recordTitleStyle = {
  margin: 0,
  color: "#4b5f4e",
  fontSize: 21,
};

const recordDateStyle = {
  margin: "10px 0 6px",
  color: "#66736a",
  fontSize: 16,
};

const recordMemoStyle = {
  margin: "8px 0",
  color: "#405143",
  lineHeight: 1.5,
  fontSize: 16,
};

const recordUserStyle = {
  margin: "12px 0 0",
  color: "#8a958c",
  fontSize: 14,
};

const smallDeleteButtonStyle = {
  marginTop: 12,
  padding: "8px 12px",
  borderRadius: 12,
  border: "none",
  background: "#f2d4d0",
  color: "#b7352a",
  fontWeight: 800,
  cursor: "pointer",
};