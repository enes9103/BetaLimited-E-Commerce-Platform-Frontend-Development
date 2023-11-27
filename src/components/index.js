import { lazy } from "react";

//layouts
const Header = lazy(() => import("./layouts/Header"));
const Layout = lazy(() => import("./layouts/Layout"));
const MainContent = lazy(() => import("./layouts/MainContent"));
const Navigation = lazy(() => import("./layouts/Navigation"));
const SideDrawer = lazy(() => import("./layouts/SideDrawer"));
const SideNav = lazy(() => import("./layouts/SideNav"));
//common
const ModeToggle = lazy(() => import("./common/ModeToggle"));
const ProductCard = lazy(() => import("./common/ProductCard"));
const SearchBar = lazy(() => import("./common/SearchBar"));
const ShoppingCart = lazy(() => import("./common/ShoppingCart"));
const StarRating = lazy(() => import("./common/StarRating"));

export {
  Layout,
  Navigation,
  Header,
  MainContent,
  SideDrawer,
  SideNav,
  ModeToggle,
  ProductCard,
  SearchBar,
  ShoppingCart,
  StarRating,
};
