// =============================================
// File Purpose: Permission Checker
// Module: Permission Engine
// Sprint: 13
// =============================================

import permissions from "./permissions";

function hasPermission(role, permission) {

  const rolePermissions = permissions[role] || [];

  return rolePermissions.includes(permission);

}

export default hasPermission;