// =============================================
// File Purpose: Main Enterprise Layout
// Module: Enterprise Shell + Dynamic Sidebar
// Sprint: 12
// =============================================

import institutionProfile from "../branding/institutionProfile";
import themeTokens from "../branding/themeTokens";
import { getMenu } from "../menu";

function MainLayout({ children }) {
  // Temporary Role
  // بعد میں Login کے بعد یہ خود Database سے آئے گا
  const currentRole = "PARENT";
  // Dynamic Menu
  const menuItems = getMenu(currentRole);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: themeTokens.colors.background,
        color: themeTokens.colors.text,
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* ================= HEADER ================= */}

      <header
        style={{
          height: "70px",
          background: themeTokens.colors.primary,
          color: "#ffffff",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 30px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            fontSize: "22px",
            fontWeight: "bold",
          }}
        >
          {institutionProfile.institutionName}
        </div>

        <div
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
          }}
        >
          <span>🔔 Notifications</span>

          <span>👤 {currentRole}</span>
        </div>
      </header>

      {/* ================= BODY ================= */}

      <div
        style={{
          display: "flex",
          minHeight: "calc(100vh - 70px)",
        }}
      >
        {/* ================= SIDEBAR ================= */}

        <aside
          style={{
            width: "260px",
            background: themeTokens.colors.secondary,
            color: "#ffffff",
            padding: "20px",
            boxSizing: "border-box",
          }}
        >
          <h3>MENU</h3>

          <hr />

          {menuItems.map((item) => (
            <div
              key={item}
              style={{
                padding: "12px 0",
                borderBottom: "1px solid rgba(255,255,255,0.15)",
                cursor: "pointer",
              }}
            >
              {item}
            </div>
          ))}
        </aside>

        {/* ================= CONTENT ================= */}

        <main
          style={{
            flex: 1,
            padding: "30px",
            boxSizing: "border-box",
          }}
        >
          {children}
        </main>
      </div>
    </div>
  );
}

export default MainLayout;