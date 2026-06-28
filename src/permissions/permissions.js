// =============================================
// File Purpose: Role Permissions
// Module: Permission Engine
// Sprint: 13
// =============================================

const permissions = {

  SUPER_ADMIN: [
    "VIEW_DASHBOARD",
    "MANAGE_INSTITUTIONS",
    "MANAGE_SUBSCRIPTIONS",
    "MANAGE_BRANDING",
    "MANAGE_USERS",
    "MANAGE_SETTINGS"
  ],

  DIRECTOR: [
    "VIEW_DASHBOARD",
    "VIEW_ACADEMICS",
    "VIEW_ACCOUNTS",
    "VIEW_ATTENDANCE",
    "VIEW_REPORTS"
  ],

  PRINCIPAL: [
    "VIEW_DASHBOARD",
    "VIEW_STUDENTS",
    "VIEW_TEACHERS",
    "VIEW_ATTENDANCE",
    "VIEW_EXAMINATION"
  ],

  CLASS_INCHARGE: [
    "VIEW_DASHBOARD",
    "MARK_ATTENDANCE",
    "MANAGE_RESULTS",
    "SEND_SUMMARIES"
  ],

  SUBJECT_TEACHER: [
    "VIEW_DASHBOARD",
    "MARK_ATTENDANCE",
    "ENTER_MARKS"
  ],

  STUDENT: [
    "VIEW_DASHBOARD",
    "VIEW_RESULTS",
    "APPLY_LEAVE"
  ],

  PARENT: [
    "VIEW_DASHBOARD",
    "VIEW_ATTENDANCE",
    "VIEW_FEE",
    "APPLY_LEAVE"
  ]

};

export default permissions;