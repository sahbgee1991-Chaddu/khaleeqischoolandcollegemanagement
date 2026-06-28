// =============================================
// File Purpose: Sidebar Menu Engine
// =============================================

import roleMenus from "./roleMenus";

function getMenu(role) {

  return roleMenus[role] || [];

}

export default getMenu;