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
    <nav style={topTabStyle}>
      {tabs.map((tab) => {
        const active = location.pathname === tab.path;

        return (
          <button
            key={tab.path}
            onClick={() => navigate(tab.path)}
            style={{
              ...tabButtonStyle,
              color: active ? "#2f6f44" : "#7d8b80",
              fontWeight: active ? 900 : 700,
              borderBottom: active
                ? "4px solid #3f8f4f"
                : "4px solid transparent",
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

const topTabStyle = {
  display: "flex",
  background: "#ffffff",
  borderRadius: 18,
  marginBottom: 20,
  overflowX: "auto" as const,
  overflowY: "hidden" as const,
  boxShadow: "0 5px 16px rgba(0,0,0,0.06)",
};

const tabButtonStyle = {
  flex: 1,
  minWidth: 72,
  padding: "12px 8px",
  border: "none",
  background: "transparent",
  fontSize: 14,
  cursor: "pointer",
  whiteSpace: "nowrap" as const,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 4,
};

const iconStyle = {
  fontSize: 17,
};