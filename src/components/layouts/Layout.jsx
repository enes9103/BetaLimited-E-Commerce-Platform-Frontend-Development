import * as React from "react";
import PropTypes from "prop-types";
// Custom Components
import {Header, SideNav, Navigation, SideDrawer, ProductCard, MainContent} from "../index.js"
import DarkLogo from "../../assets/icons/DarkLogo.jsx";
import LightLogo from "../../assets/icons/LightLogo.jsx";
// Redux
import { getSessionId } from "../../redux/slices/SessionSlice.js";
import { getProducts } from "../../redux/slices/ProductSlice.js";
import { useSelector, useDispatch } from "react-redux";
// MUI Components
import Box from "@mui/joy/Box";
import { useColorScheme } from "@mui/joy/styles";
import Button from "@mui/joy/Button";
// Assets
import darkLogo from "../../assets/images/logo-dark.png";
import lightLogo from "../../assets/images/logo-light.png";
// Helpers
import { setStorageData } from "../../helpers/StorageHelper.js";

Root.propTypes = {
  sx: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  children: PropTypes.node,
};

export default function Layout() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const { mode, setMode } = useColorScheme();

  const dispatch = useDispatch();

  const { getSessionIdResp } = useSelector((store) => store.session);
  const { getProductsResp } = useSelector((store) => store.products);
  const { searchProductsResp } = useSelector((store) => store.products);

  React.useEffect(() => {
    dispatch(getSessionId());
  }, []);

  React.useEffect(() => {
    if (getSessionIdResp) {
      setStorageData("Session-ID", getSessionIdResp);
    }
  }, [getSessionIdResp]);

  React.useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <Root
      sx={{
        gridTemplateColumns: {
          xs: "1fr",
          sm: "minmax(240px, 300px) minmax(450px, 1fr)",
          md: "minmax(220px, 380px) minmax(600px, 1fr)",
        },
        ...(drawerOpen && {
          height: "100vh",
          overflow: "hidden",
        }),
      }}
    >
      <Header
        mode={mode}
        setMode={setMode}
        drawerOpen={drawerOpen}
        setDrawerOpen={setDrawerOpen}
      />

      <SideNav>
        <Navigation />
      </SideNav>

      <MainContent>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 2,
            margin: "46px 28px",
          }}
        >
          {(searchProductsResp.length > 0
            ? searchProductsResp
            : getProductsResp
          ).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Box>

        <Box
          sx={{ display: "flex", justifyContent: "center", marginTop: "100px" }}
        >
          <Button
            // onClick={handleLoadMore}
            sx={{
              backgroundColor: "beta.betaHardBg",
              color: "white",
              transition: "background-color 0.3s, color 0.3s",
              width: {
                xs: "80%",
                md: "180px",
                lg: "240px",
              },
              "&:hover": {
                backgroundColor: "white",
                color: "beta.betaHardBg",
                border: "1px solid",
              },
            }}
          >
            Load More...
          </Button>
        </Box>
      </MainContent>

      {drawerOpen && (
        <SideDrawer onClose={() => setDrawerOpen(false)}>
          {mode === "light" ? (
            <DarkLogo
              src={darkLogo}
              alt="darkLogo"
              height={60}
              customStyle={{ marginBottom: "32px" }}
            />
          ) : (
            <LightLogo
              src={lightLogo}
              alt="lightLogo"
              height={60}
              customStyle={{ marginBottom: "32px" }}
            />
          )}
          <Navigation />
        </SideDrawer>
      )}
    </Root>
  );
}

function Root(props) {
  const { sx, ...otherProps } = props;

  return (
    <Box
      {...otherProps}
      sx={[
        {
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "minmax(64px, 200px) minmax(450px, 1fr)",
            md: "minmax(160px, 300px) minmax(300px, 500px) minmax(500px, 1fr)",
          },
          gridTemplateRows: "64px 1fr",
          minHeight: "100vh",
          bgcolor: "background.level1",
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    />
  );
}
