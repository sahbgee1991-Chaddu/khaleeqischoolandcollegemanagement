// =============================================
// File Purpose: Theme Design Tokens
// Module: Institution Branding Engine
// =============================================

import brandingConfig from "./brandingConfig";

const themeTokens = {

  colors: brandingConfig.currentTheme,

  spacing: {

    xs: "4px",

    sm: "8px",

    md: "16px",

    lg: "24px",

    xl: "40px"

  },

  radius: brandingConfig.currentTheme.borderRadius

};

export default themeTokens;