// =============================================
// File Purpose: Role Based Menus
// Module: Sidebar Engine
// =============================================

const roleMenus = {

  SUPER_ADMIN: [

    "Dashboard",

    "Institutions",

    "Subscriptions",

    "Branding",

    "Users",

    "Settings"

  ],

  DIRECTOR: [

    "Dashboard",

    "Academics",

    "Accounts",

    "Attendance",

    "Reports"

  ],

  PRINCIPAL: [

    "Dashboard",

    "Students",

    "Teachers",

    "Attendance",

    "Examination"

  ],

  CLASS_INCHARGE: [

    "Dashboard",

    "Attendance",

    "Result Sheets",

    "Leave Requests"

  ],

  SUBJECT_TEACHER: [

    "Dashboard",

    "Attendance",

    "Marks Entry"

  ],

  STUDENT: [

    "Dashboard",

    "Attendance",

    "Results",

    "Leave"

  ],

  PARENT: [

    "Dashboard",

    "Attendance",

    "Fee",

    "Leave Status"

  ]

};

export default roleMenus;