// =============================================
// File Purpose: Authentication Service
// Sprint: 14
// =============================================

const authService = {

  login(userData) {

    localStorage.setItem(
      "khaleeqi_user",
      JSON.stringify(userData)
    );

  },

  logout() {

    localStorage.removeItem(
      "khaleeqi_user"
    );

  },

  getCurrentUser() {

    const user = localStorage.getItem(
      "khaleeqi_user"
    );

    return user
      ? JSON.parse(user)
      : null;

  }

};

export default authService;