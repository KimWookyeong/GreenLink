import { useNavigate } from 'react-router-dom';

const gardens = [
  {
    id: '1',
    title: '양산 중앙 공유텃밭',
    location: '경남 양산시',
    crops: ['상추', '토마토'],
    members: 8,
    recent: '오늘 오전 물주기 완료',
  },
  {
    id: '2',
    title: '물금 청소년 텃밭',
    location: '경남 양산시 물금읍',
    crops: ['방울토마토', '바질'],
    members: 5,
    recent: '상추 성장 기록 추가',
  },
  {
    id: '3',
    title: '우리동네 나눔밭',
    location: '양산시 중앙동',
    crops: ['고추', '깻잎'],
    members: 6,
    recent: '수확 나눔 게시 등록',
  },
];

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: '100vh', background: '#f4f8f1', padding: 20 }}>
      <div style={{ maxWidth: 420, margin: '0 auto' }}>
        <header style={{ textAlign: 'center', marginBottom: 24 }}>
          <div style={{ fontSize: 34, fontWeight: 800, color: '#1f3d2b' }}>
            GreenLink 🌱
          </div>
          <p style={{ color: '#5f6f64', marginTop: 8 }}>
            지역 공유텃밭 연결·관리 플랫폼
          </p>
        </header>

        <section
          style={{
            background: 'linear-gradient(135deg, #dff5d8, #ffffff)',
            borderRadius: 24,
            padding: 22,
            marginBottom: 20,
            boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
          }}
        >
          <h2 style={{ margin: 0, color: '#23452f', fontSize: 22 }}>
            유휴공간을 공유텃밭으로 연결하세요
          </h2>
          <p style={{ color: '#5d6b5f', lineHeight: 1.6 }}>
            함께 심고, 함께 기록하고, 수확물을 지역 주민과 나누는 순환형 텃밭
            플랫폼입니다.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              gap: 8,
              marginTop: 16,
            }}
          >
            <div style={miniBoxStyle}>
              <strong>3</strong>
              <span>등록 텃밭</span>
            </div>
            <div style={miniBoxStyle}>
              <strong>19</strong>
              <span>참여자</span>
            </div>
            <div style={miniBoxStyle}>
              <strong>5</strong>
              <span>나눔 게시</span>
            </div>
          </div>
        </section>

        <section
          style={{
            height: 180,
            background: '#dbe9d4',
            borderRadius: 22,
            marginBottom: 22,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#55705a',
            fontWeight: 700,
          }}
        >
          🗺 지도 영역
          <br />
          주변 공유텃밭 위치 표시 예정
        </section>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 12,
          }}
        >
          <h2 style={{ fontSize: 22, margin: 0, color: '#213c2b' }}>
            주변 공유텃밭
          </h2>
          <button style={addButtonStyle}>+ 등록</button>
        </div>

        <div style={{ display: 'grid', gap: 14 }}>
          {gardens.map((garden) => (
            <div
              key={garden.id}
              onClick={() => navigate(`/gardens/${garden.id}`)}
              style={{
                background: '#ffffff',
                borderRadius: 20,
                padding: 18,
                boxShadow: '0 6px 18px rgba(0,0,0,0.07)',
                cursor: 'pointer',
              }}
            >
              <h3 style={{ margin: 0, fontSize: 20, color: '#233d2b' }}>
                {garden.title}
              </h3>

              <p style={{ margin: '8px 0', color: '#68766b' }}>
                📍 {garden.location}
              </p>

              <p style={{ margin: '8px 0', color: '#68766b' }}>
                🌿 {garden.crops.join(', ')}
              </p>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginTop: 14,
                  fontSize: 14,
                  color: '#5f6f64',
                }}
              >
                <span>👥 참여 {garden.members}명</span>
                <span>최근: {garden.recent}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const miniBoxStyle = {
  background: 'rgba(255,255,255,0.8)',
  borderRadius: 16,
  padding: 12,
  textAlign: 'center' as const,
  color: '#2f5139',
  display: 'flex',
  flexDirection: 'column' as const,
  gap: 4,
};

const addButtonStyle = {
  border: 'none',
  background: '#3f8f4f',
  color: 'white',
  borderRadius: 999,
  padding: '9px 14px',
  fontWeight: 700,
  cursor: 'pointer',
};
