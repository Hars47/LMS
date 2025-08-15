import { createTheme, alpha } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#7c3aed" }, // violet-600
    secondary: { main: "#06b6d4" }, // cyan-500
    background: {
      default: "#0b1022",
      paper: alpha("#111827", 0.8),
    },
  },
  typography: {
    fontFamily: ['Inter','Roboto','Segoe UI','system-ui','Arial','sans-serif'].join(','),
    h1: { fontWeight: 800, letterSpacing: "-0.02em" },
    h2: { fontWeight: 800, letterSpacing: "-0.02em" },
    h3: { fontWeight: 700 },
    button: { textTransform: "none", fontWeight: 600 },
  },
  components: {
    MuiPaper: { styleOverrides: { root: { borderRadius: 16, border: "1px solid rgba(255,255,255,0.08)" } } },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          paddingInline: 18,
          boxShadow: "0 8px 20px rgba(124,58,237,0.35)",
        },
      },
    },
    MuiAppBar: { styleOverrides: { root: { borderBottom: "1px solid rgba(255,255,255,0.08)" } } },
    MuiDrawer: { styleOverrides: { paper: { borderRight: "1px solid rgba(255,255,255,0.08)" } } },
  },
});

export default theme;
