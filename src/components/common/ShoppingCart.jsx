import React from "react";
// Redux
import { useDispatch } from "react-redux";
import { removeFromBasket } from "../../redux/slices/ManageBasketSlice";
// MUI Components
import Menu from "@mui/joy/Menu";
import MenuItem from "@mui/joy/MenuItem";
import Typography from "@mui/joy/Typography";
import Table from "@mui/joy/Table";
import Badge from "@mui/joy/Badge";
import MenuButton from "@mui/joy/MenuButton";
import Dropdown from "@mui/joy/Dropdown";
// MUI Icons
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { deleteProductFromCard } from "../../redux/slices/ManageCardSlice";

const ShoppingCart = ({ basketItems, title_1, title_2, title_3, title_4 }) => {
  const dispatch = useDispatch();

  // const handleRemoveFromBasket = (itemId) => {
  //   dispatch(removeFromBasket(itemId));
  // };

  const handleRemoveFromBasket = (itemId) => {
    console.log(itemId);
    const updatedBasket = basketItems.filter(
      (item) => item.productId === itemId
    );

    dispatch(deleteProductFromCard(updatedBasket));
  };

  return (
    <>
      <Dropdown>
        <Badge
          badgeContent={
            basketItems !== "Cart is empty." &&
            basketItems?.filter((item) => item.quantity > 0)?.length !== 0
              ? basketItems.length
              : 0
          }
          variant="solid"
          sx={{ "& .MuiBadge-badge": { backgroundColor: "#c24b5a" } }}
        >
          <MenuButton
            size="lg"
            variant="soft"
            color="neutral"
            component="a"
            href="#"
            sx={{ borderRadius: "100px", paddingInline: "10px" }}
          >
            <ShoppingBagOutlinedIcon />
          </MenuButton>
        </Badge>

        {basketItems !== "Cart is empty." ||
        basketItems?.filter((item) => item.quantity > 0)?.length === 0 ? (
          <Menu
            sx={{
              paddingInline: "10px",
              marginTop: "1rem !important",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center",
              maxWidth: "360px",
            }}
          >
            <MenuItem disablePadding>
              <LocalGroceryStoreOutlinedIcon
                sx={{ fontSize: "50px", margin: "0.5rem", marginX: "auto" }}
              />
            </MenuItem>

            <Typography component="h2" sx={{}}>
              Sepetin şu an boş
            </Typography>
            <Typography component="span">
              Sepetini BetaLimited’in fırsatlarla dolu dünyasından doldurmak
              için sitemizdeki ürünleri incelemeye başlayabilirsin.
            </Typography>
          </Menu>
        ) : (
          <Menu
            sx={{
              paddingInline: "6px",
              marginTop: "1rem !important",
              maxWidth: "420px",
            }}
          >
            <MenuItem disablePadding>
              <Table aria-label="basic table">
                <thead>
                  <tr>
                    <th>{title_1}</th>
                    <th>{title_2}</th>
                    <th>{title_3}</th>
                    <th>{title_4}</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {basketItems !== "Cart is empty." &&
                    basketItems
                      ?.filter((item) => item.quantity > 0)
                      .map((item) => (
                        <tr key={item.productId}>
                          <td>{item.name}</td>
                          <td>{item.quantity}</td>
                          <td>{Number(item.price).toFixed(2)}</td>
                          <td>
                            {Number(item.price * item.quantity).toFixed(2)}
                          </td>
                          <td>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleRemoveFromBasket(item.productId);
                              }}
                            >
                              Sil
                            </button>
                          </td>
                        </tr>
                      ))}
                </tbody>
              </Table>
            </MenuItem>
          </Menu>
        )}
      </Dropdown>
    </>
  );
};

export default ShoppingCart;
