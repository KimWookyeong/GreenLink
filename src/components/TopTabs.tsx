import { useNavigate, useLocation } from "react-router-dom";

export default function TopTabs() {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    { label: "가이드", path: "/guide" },
    { label: "파밍", path: "/home" },
    { label: "마이", path: "/my" },
    { label: "멘토", path: "/mentor" },
    { label: "로그", path: "/log" },
  ];

  return (
    <div style={topTabStyle}>
      {tabs.map((tab) => {
        const active = location.pathname === tab.path;

        return (
          <button
            key={tab.path}
            onClick={() => navigate(tab.path)}
            style={{
              flex: 1,
              padding: "12px 0",
              border: "none",
              background: "transparent",
              fontWeight: active ? 900 : 700,
              color: active ? "#2f6f44" : "#7d8b80",
              borderBottom: active
                ? "4px solid #3f8f4f"
                : "4px solid transparent",
              cursor: "pointer",
            }}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}

const topTabStyle = {
  display: "flex",
  background: "#fff",
  borderRadius: 16,
  marginBottom: 20,
  boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
};