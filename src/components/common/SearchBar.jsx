import * as React from "react";
// Redux
import { useSelector, useDispatch } from "react-redux";
import { searchProducts } from "../../redux/slices/ProductSlice";
// MUI Components
import Button from "@mui/joy/Button";
import Input from "@mui/joy/Input";
import IconButton from "@mui/joy/IconButton";
import { styled } from "@mui/system";
import Box from "@mui/joy/Box";
// MUI Icons
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const StyledForm = styled("form")(() => ({}));

const SearchBar = () => {
  const [searchValue, setSearchValue] = React.useState("");
  const dispatch = useDispatch();

  const handleSearchProduct = () => {
    dispatch(searchProducts(searchValue));
  };

  return (
    <StyledForm
      sx={{
        display: { xs: "none", md: "flex" },
        alignItems: "center",
        justifyContent: "center",
        zIndex: 99,
        border: "1px solid var(--joy-palette-neutral-100, #F0F4F8)",
        borderRadius: "30px",
        width: "50%",
        height: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          height: "100%",
          width: "100%",
        }}
      >
        <IconButton
          disabled
          sx={{
            display: {
              xs: "none",
              md: "flex",
              height: "100%",
              paddingLeft: "12px",
              "&:hover": {
                backgroundColor: "transparent !important",
              },
            },
          }}
        >
          <SearchOutlinedIcon />
        </IconButton>
        <Input
          placeholder="Searching for..."
          required
          onChange={(e) => setSearchValue(e.target.value)}
          sx={{
            marginLeft: "2px",
            border: "none",
            outline: "none",
            backgroundColor: "transparent !important",
            height: "100%",
            width: "100%",
            "&:focus": {
              outline: "transparent !important",
              border: "transparent !important",
              textDecorationThickness: "transparent 'important",
              WebkitTapHighlightColor: "transparent 'important",
            },
            "&:hover": {
              backgroundColor: "transparent !important",
            },
          }}
        />
        <Button
          type="button"
          onClick={handleSearchProduct}
          sx={{
            backgroundColor: "beta.betaHardBg",
            borderRadius: "0 20px 20px 0",
            transition: "background-color 0.3s, color 0.3s",
            color: "white",
            fontWeight: "bold",
            padding: "5px 20px",
            height: "100%",
            width: "20%",
            "&:hover": {
              backgroundColor: "beta.100",
            },
          }}
        >
          Search
        </Button>
      </Box>
    </StyledForm>
  );
};

export default SearchBar;
