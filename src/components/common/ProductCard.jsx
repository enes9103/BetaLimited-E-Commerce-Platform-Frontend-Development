import * as React from "react";
import { StaticImage } from "../../assets";
// Custom Components
import StarRating from "./StarRating";
// Redux
import { useDispatch } from "react-redux";
import { addToBasket } from "../../redux/slices/ManageBasketSlice";
import { addProductToCard } from "../../redux/slices/ManageCardSlice";
// MUI Components
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import IconButton from "@mui/joy/IconButton";
import Tooltip from "@mui/joy/Tooltip";
// MUI Icons
import Add from "@mui/icons-material/Add";
import { Remove } from "@mui/icons-material";

export default function ProductCard({ product }) {
  const [quantity, setQuantity] = React.useState(0);
  const [showTooltip, setShowTooltip] = React.useState(false);

  const dispatch = useDispatch();

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.closest(".tooltip-container") === null) {
        setShowTooltip(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleAddToCart = () => {
    if (quantity === 0) {
      setShowTooltip(true);
      return;
    }

    // For Static structure
    // for (let i = 0; i < quantity; i++) {
    //   dispatch(addToBasket({ ...product, quantity: 1 }));
    // }
    // setQuantity(0);

    // For Service structure
    dispatch(addProductToCard({ ...product, quantity: quantity }));
    setQuantity(0);
  };

  return (
    <Card variant="outlined" sx={{ maxWidth: 380, position: "relative" }}>
      <CardOverflow>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontSize: "13px",
            position: "absolute",
            top: "12px",
            zIndex: "99",
            backgroundColor: "beta.betaHardBg",
            padding: "2px 4px",
            borderRadius: "18px",
            minWidth: "70px",
          }}
        >
          {product.discount}
        </Box>

        <AspectRatio ratio="1">
          <img src={product.image || StaticImage} alt={product.name} />
        </AspectRatio>
      </CardOverflow>

      <CardContent
        orientation="horizontal"
        sx={{ alignItems: "center", gap: 1, justifyContent: "space-between" }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <Typography level="title-md">{product.name}</Typography>
          <StarRating value={product.rating} />
          <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <Typography
              component="span"
              sx={{
                fontSize: "15px",
                color: "beta.betaHardBg",
              }}
            >
              ${Number(product.price).toFixed(2)}
            </Typography>
            <Typography
              component="span"
              sx={{
                fontSize: "15px",
                color: "grey",
                textDecoration: "line-through",
              }}
            >
              ${Number(product.originalPrice).toFixed(2)}
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
            gap: 0.5,
            ml: "auto",
          }}
        >
          {quantity > 0 ? (
            <>
              <IconButton
                size="sm"
                variant="outlined"
                onClick={handleDecrement}
                sx={{
                  color: "beta.betaHardBg",
                  border: "1px solid",
                  "& .MuiSvgIcon-root": {
                    color: "beta.betaHardBg",
                  },
                }}
              >
                <Remove />
              </IconButton>

              <div className="tooltip-container">
                <Typography fontWeight="md" textColor="text.secondary">
                  {quantity}
                </Typography>
              </div>
            </>
          ) : (
            <>
              <Typography
                component="span"
                sx={{
                  minHeight: "2rem !important",
                  maxHeight: "2rem !important",
                  visibility: "hidden",
                }}
              ></Typography>
              <Typography
                component="span"
                sx={{
                  minHeight: "1.5rem !important",
                  maxHeight: "2rem !important",
                  visibility: "hidden",
                }}
              ></Typography>
            </>
          )}

          <Tooltip
            title="Enter the product quantity"
            arrow
            open={showTooltip}
            placement="right"
            color="neutral"
            variant="solid"
          >
            <IconButton
              size="sm"
              variant="outlined"
              onClick={handleIncrement}
              sx={{
                color: "beta.betaHardBg",
                border: "1px solid",
                "& .MuiSvgIcon-root": {
                  color: "beta.betaHardBg",
                },
              }}
            >
              <Add />
            </IconButton>
          </Tooltip>
        </Box>
      </CardContent>

      <Button
        startDecorator={<Add />}
        onClick={handleAddToCart}
        sx={{
          backgroundColor: "beta.betaHardBg",
          color: "white",
          transition: "background-color 0.3s, color 0.3s",
          marginTop: "4px",
          "&:hover": {
            backgroundColor: "white",
            color: "beta.betaHardBg",
            border: "1px solid",
          },
        }}
      >
        Add to Basket
      </Button>
    </Card>
  );
}
