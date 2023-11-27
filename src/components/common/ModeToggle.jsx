import React, { useEffect, useState } from "react";
// MUI Components
import IconButton from "@mui/joy/IconButton";
// MUI Icons
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";

function ModeToggle({ mode, setMode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleModeToggle = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  if (!mounted) {
    return <IconButton size="sm" variant="soft" color="neutral" />;
  }

  return (
    <IconButton
      id="toggle-mode"
      size="lg"
      variant="soft"
      color="neutral"
      sx={{ borderRadius: "100px" }}
      onClick={handleModeToggle}
    >
      {mode === "light" ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
    </IconButton>
  );
}

export default ModeToggle;
