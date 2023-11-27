import { extendTheme } from "@mui/joy/styles";

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        beta: {
          100: "#CF727E",
          200: "#C24B5A",
          betaSoftBg: "var(--joy-palette-beta-100)",
          betaHardBg: "var(--joy-palette-beta-200)",
        },
      },
    },
    dark: {
      palette: {
        beta: {
          100: "#CF727E",
          200: "#C24B5A",
          betaSoftBg: "var(--joy-palette-beta-100)",
          betaHardBg: "var(--joy-palette-beta-200)",
        },
      },
    },
  },
});

export default theme;
