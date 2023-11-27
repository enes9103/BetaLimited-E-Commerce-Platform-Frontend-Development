import React from "react";
import { StyledEngineProvider } from "@mui/joy/styles";
import App from "./App.js";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import theme from "./styles/theme.js";
import { createRoot } from 'react-dom/client';
import { CssVarsProvider } from "@mui/joy/styles";

createRoot(document.querySelector("#root")).render(
  <Provider store={store}>
    <StyledEngineProvider injectFirst>
      <CssVarsProvider disableTransitionOnChange theme={theme}>
        <App />
      </CssVarsProvider>
    </StyledEngineProvider>
  </Provider>
);
