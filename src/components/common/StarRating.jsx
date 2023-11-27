import React from "react";
import PropTypes from "prop-types";
// MUI Components
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";

const Star = ({ marked, starId }) => {
  return (
    <Typography
      data-star-id={starId}
      role="button"
      sx={{
        display: "flex",
        alignItems: "center",
        fontSize: "22px",
        gap: "7px",
        height: "24px",
        cursor: "pointer",
        color: marked ? "#EFB23D" : "grey",
      }}
    >
      {marked ? "\u2605" : "\u2606"}
    </Typography>
  );
};

Star.propTypes = {
  marked: PropTypes.bool.isRequired,
  starId: PropTypes.number.isRequired,
};

const StarRating = ({ value }) => {
  const [rating, setRating] = React.useState(parseInt(value) || 0);
  const [selection, setSelection] = React.useState(0);

  const hoverOver = (event) => {
    let val = 0;
    if (event && event.target && event.target.getAttribute("data-star-id"))
      val = event.target.getAttribute("data-star-id");
    setSelection(val);
  };

  return (
    <Box
      onMouseOut={() => hoverOver(null)}
      onClick={(e) =>
        setRating(e.target.getAttribute("data-star-id") || rating)
      }
      onMouseOver={hoverOver}
      sx={{ display: "flex", flexDirection: "row", gap: "6px" }}
    >
      {Array.from({ length: 5 }, (v, i) => (
        <Star
          starId={i + 1}
          key={`star_${i + 1}`}
          marked={selection ? selection >= i + 1 : rating >= i + 1}
        />
      ))}
      <Typography
        sx={{
          fontSize: "14px",
          color: "grey",
          marginTop: "2px",
        }}
      >
        {`( ${rating} )`}
      </Typography>
    </Box>
  );
};

StarRating.propTypes = {
  value: PropTypes.number.isRequired,
};

export default StarRating;
