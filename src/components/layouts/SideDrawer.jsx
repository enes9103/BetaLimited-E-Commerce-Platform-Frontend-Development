import React from "react";
import PropTypes from "prop-types";
// MUI Components
import Box from "@mui/joy/Box";
import Sheet from "@mui/joy/Sheet";

function SideDrawer({ onClose, ...props }) {
  const { sx, ...otherProps } = props;
  return (
    <Box
      {...otherProps}
      sx={[
        { position: "fixed", zIndex: 1200, width: "100%", height: "100%" },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <Box
        role="button"
        onClick={onClose}
        sx={{
          position: "absolute",
          inset: 0,
          bgcolor: (theme) =>
            `rgba(${theme.vars.palette.neutral.darkChannel} / 0.8)`,
        }}
      />
      <Sheet
        sx={{
          minWidth: 256,
          width: "max-content",
          height: "100%",
          p: 2,
          boxShadow: "lg",
          bgcolor: "background.body",
        }}
      >
        {props.children}
      </Sheet>
    </Box>
  );
}

SideDrawer.propTypes = {
  sx: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default SideDrawer;
