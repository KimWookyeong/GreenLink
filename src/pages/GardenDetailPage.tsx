import { useParams } from "react-router-dom";
import { useState } from "react";

export default function GardenDetailPage() {
  const { gardenId } = useParams();
  const [tab, setTab] = useState("activity");

  return (
    <div style={{ minHeight: "100vh", background: "#f4f8f1", padding: 20 }}>
      <div style={{ maxWidth: 420, margin: "0 auto" }}>
        
        {/* 상단 텃밭 정보 */}
        <div
          style={{
            background: "#ffffff",
            borderRadius: 20,
            padding: 20,
            boxShadow: "0 6px 18px rgba(0,0,0,0.07)",
            marginBottom: 20,
          }}
        >
          <h1 style={{ margin: 0 }}>🌱 양산 중앙 공유텃밭</h1>
          <p style={{ margin: "8px 0", color: "#666" }}>
            📍 경남 양산시
          </p>
          <p style={{ margin: 0, color: "#666" }}>
            🌿 상추, 토마토
          </p>
        </div>

        {/* 탭 버튼 */}
        <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
          <TabButton text="공동관리" value="activity" tab={tab} setTab={setTab} />
          <TabButton text="성장기록" value="growth" tab={tab} setTab={setTab} />
          <TabButton text="수확나눔" value="harvest" tab={tab} setTab={setTab} />
        </div>

        {/* 탭 내용 */}
        {tab === "activity" && <ActivityTab />}
        {tab === "growth" && <GrowthTab />}
        {tab === "harvest" && <HarvestTab />}
      </div>
    </div>
  );
}

function TabButton({ text, value, tab, setTab }: any) {
  return (
    <button
      onClick={() => setTab(value)}
      style={{
        flex: 1,
        padding: 10,
        borderRadius: 12,
        border: "none",
        background: tab === value ? "#3f8f4f" : "#e0e7dd",
        color: tab === value ? "white" : "#333",
        fontWeight: 700,
        cursor: "pointer",
      }}
    >
      {text}
    </button>
  );
}

/* ---------------- 공동관리 기록 ---------------- */

function ActivityTab() {
  return (
    <div>
      <h3>📋 공동관리 기록</h3>

      <RecordCard
        title="물주기"
        date="2026-04-22"
        memo="상추 전체 물주기 완료"
        user="김우경"
      />

      <RecordCard
        title="잡초 제거"
        date="2026-04-21"
        memo="토마토 주변 정리"
        user="민지"
      />
    </div>
  );
}

/* ---------------- 성장 기록 ---------------- */

function GrowthTab() {
  return (
    <div>
      <h3>🌱 작물 성장 기록</h3>

      <RecordCard
        title="상추"
        date="4월 25일"
        memo="싹이 올라옴"
        user="기록"
      />

      <RecordCard
        title="상추"
        date="5월 3일"
        memo="잎 5장으로 성장"
        user="기록"
      />
    </div>
  );
}

/* ---------------- 수확 나눔 ---------------- */

function HarvestTab() {
  return (
    <div>
      <h3>🍅 수확 나눔</h3>

      <RecordCard
        title="상추 나눔"
        date="오늘"
        memo="3봉 나눔 가능"
        user="수아"
      />

      <RecordCard
        title="토마토 판매"
        date="예정"
        memo="지역장터 판매 예정"
        user="지훈"
      />
    </div>
  );
}

/* 공통 카드 */

function RecordCard({ title, date, memo, user }: any) {
  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: 16,
        padding: 16,
        marginBottom: 12,
        boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
      }}
    >
      <h4 style={{ margin: 0 }}>{title}</h4>
      <p style={{ margin: "6px 0", color: "#666" }}>{date}</p>
      <p style={{ margin: "6px 0" }}>{memo}</p>
      <p style={{ margin: 0, fontSize: 12, color: "#999" }}>
        작성자: {user}
      </p>
    </div>
  );
}