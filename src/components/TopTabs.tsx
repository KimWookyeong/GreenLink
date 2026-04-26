import { useLocation, useNavigate } from "react-router-dom";

export default function TopTabs() {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    { label: "가이드", icon: "🌱", path: "/guide" },
    { label: "파밍", icon: "🗺️", path: "/home" },
    { label: "나눔", icon: "🤝", path: "/share" },
    { label: "마이", icon: "🏡", path: "/my" },
    { label: "멘토", icon: "💡", path: "/mentor" },
    { label: "로그", icon: "📊", path: "/log" },
  ];

  return (
    <nav style={tabBarStyle}>
      {tabs.map((tab) => {
        const active = location.pathname === tab.path;

        return (
          <button
            key={tab.path}
            onClick={() => navigate(tab.path)}
            style={{
              ...tabButtonStyle,
              color: active ? "#1f7a43" : "#6f7d72",
              background: active ? "#e8f5e9" : "transparent",
              border: active ? "1px solid #3f8f4f" : "1px solid transparent",
            }}
          >
            <span style={iconStyle}>{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
}

const tabBarStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(6, 1fr)",
  gap: 6,
  background: "#ffffff",
  borderRadius: 18,
  padding: 8,
  marginBottom: 20,
  boxShadow: "0 5px 16px rgba(0,0,0,0.06)",
};

const tabButtonStyle = {
  height: 48,
  borderRadius: 14,
  border: "1px solid transparent",
  fontSize: 13,
  fontWeight: 800,
  cursor: "pointer",
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "center",
  justifyContent: "center",
  gap: 2,
};

const iconStyle = {
  fontSize: 17,
};