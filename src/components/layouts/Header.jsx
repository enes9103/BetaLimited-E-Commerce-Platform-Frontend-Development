import React, { useEffect } from "react";
import PropTypes from "prop-types";
// Custom Components
import {SearchBar, ModeToggle, ShoppingCart} from "../index.js"
import DarkLogo from "../../assets/icons/DarkLogo.jsx";
import LightLogo from "../../assets/icons/LightLogo.jsx";
// Redux
import { useSelector, useDispatch } from "react-redux";
import { viewProductCard } from "../../redux/slices/ManageCardSlice.js";
// MUI Components
import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
// MUI Icons
import MenuIcon from "@mui/icons-material/Menu";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
// Assets
import darkLogo from "../../assets/images/logo-dark.png";
import lightLogo from "../../assets/images/logo-light.png";

function Header({ mode, setMode, drawerOpen, setDrawerOpen }) {
  const dispatch = useDispatch();

  // For Static structure
  const { basketItems } = useSelector((store) => store.manageBasket);
  // For Service structure
  const { addProductToCardResp, viewProductCardResp } = useSelector(
    (store) => store.productCard
  );

  useEffect(() => {
    dispatch(viewProductCard());
  }, [addProductToCardResp, dispatch]);

  const totalQuantity = basketItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <Box
      component="header"
      className="Header"
      sx={{
        p: 2,
        gap: 2,
        bgcolor: "background.body",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gridColumn: "1 / -1",
        borderColor: "divider",
        position: "sticky",
        top: 0,
        zIndex: 1100,
        height: "80px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 1.5,
        }}
      >
        <IconButton
          variant="outlined"
          size="md"
          onClick={() => setDrawerOpen(true)}
          sx={{ display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>

        <IconButton
          size="sm"
          sx={{
            display: {
              xs: "none",
              sm: "inline-flex",
              "&:hover": {
                backgroundColor: "transparent",
              },
            },
          }}
        >
          {mode === "light" ? (
            <DarkLogo src={darkLogo} alt="darkLogo" height={50} />
          ) : (
            <LightLogo src={lightLogo} alt="lightLogo" height={50} />
          )}
        </IconButton>
      </Box>

      <SearchBar />

      <Box sx={{ display: "flex", flexDirection: "row", gap: 1.5 }}>
        <ModeToggle
          mode={mode}
          setMode={setMode}
          sx={{ borderRadius: "100px" }}
        />

        <IconButton
          size="lg"
          variant="soft"
          color="neutral"
          component="a"
          href="#"
          sx={{ borderRadius: "100px" }}
        >
          <PersonOutlineOutlinedIcon />
        </IconButton>

        <ShoppingCart
          totalQuantity={totalQuantity}
          basketItems={basketItems}
          title_1="Product Name"
          title_2="Quantity"
          title_3="Unit Price"
          title_4="Total"
        />
      </Box>
    </Box>
  );
}

Header.propTypes = {
  mode: PropTypes.string.isRequired,
  setMode: PropTypes.func.isRequired,
  drawerOpen: PropTypes.bool.isRequired,
  setDrawerOpen: PropTypes.func.isRequired,
};

export default Header;
