import * as React from "react";
import Layout from "./components/layouts/Layout.jsx";
import CssBaseline from "@mui/joy/CssBaseline";

export default function App() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <CssBaseline />
      <Layout />
    </React.Suspense>
  );
}
