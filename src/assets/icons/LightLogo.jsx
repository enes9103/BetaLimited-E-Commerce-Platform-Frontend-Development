import React from "react";

function LightLogo({ src, alt, height, customStyle }) {
  return <img src={src} alt={alt} height={height} style={customStyle} />;
}

export default LightLogo;
