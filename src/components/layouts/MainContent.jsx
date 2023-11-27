import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/joy/Box";

function MainContent(props) {
  const { sx, children } = props;

  return (
    <Box
      className="MainContent"
      {...props}
      sx={[...(Array.isArray(sx) ? sx : [sx])]}
    >
      {children}
    </Box>
  );
}

MainContent.propTypes = {
  sx: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  children: PropTypes.node,
};

export default MainContent;
