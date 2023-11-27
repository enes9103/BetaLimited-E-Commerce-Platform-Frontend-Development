import React from "react";
import PropTypes from "prop-types";
// MUI Components
import Box from "@mui/joy/Box";

function SideNav(props) {
  const { sx, ...otherProps } = props;

  return (
    <Box
      component="nav"
      className="Navigation"
      {...otherProps}
      sx={[
        {
          margin: "46px 0 0 28px",
          height: "40%",
          p: 2,
          bgcolor: "background.body",
          borderColor: "divider",
          display: {
            xs: "none",
            sm: "initial",
          },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    />
  );
}

SideNav.propTypes = {
  sx: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  children: PropTypes.node,
};

export default SideNav;
