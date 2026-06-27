// =============================================
// File Purpose: Root Enterprise Application
// Module: App Foundation
// =============================================

import appConfig from "../config/appConfig";

function EnterpriseApp() {
  return (
    <div
      style={{
        padding: "40px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>{appConfig.appName}</h1>

      <h3>Enterprise Architecture Activated</h3>

      <p>Version : {appConfig.version}</p>

      <p>{appConfig.company}</p>

      <p>{appConfig.copyright}</p>
    </div>
  );
}

export default EnterpriseApp;