import * as React from "react";
// MUI Components
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import ListItemContent from "@mui/joy/ListItemContent";
import Typography from "@mui/joy/Typography";
// MUI Icons
import { KeyboardArrowRight } from "@mui/icons-material";
import EggOutlinedIcon from "@mui/icons-material/EggOutlined";
import LunchDiningOutlinedIcon from "@mui/icons-material/LunchDiningOutlined";
import DinnerDiningOutlinedIcon from '@mui/icons-material/DinnerDiningOutlined';
import IcecreamOutlinedIcon from '@mui/icons-material/IcecreamOutlined';
import RamenDiningOutlinedIcon from '@mui/icons-material/RamenDiningOutlined';
import SoupKitchenOutlinedIcon from '@mui/icons-material/SoupKitchenOutlined';

export default function Navigation() {
  return (
    <List size="sm" sx={{ "--ListItem-radius": "8px", "--List-gap": "4px" }}>
      <ListItem nested>
        <div
          style={{
            display: "inline-block",
            position: "relative",
            marginBottom: "4px",
          }}
        >
          <Typography
            id="decorated-list-demo"
            level="body-md"
            fontWeight="lg"
            pb={0.3}
            borderBottom={"2px solid #DDE1E4"}
          >
            Top Categories
          </Typography>
          <div
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              width: "50%",
              borderBottom: "2px solid #EFCACE",
            }}
          ></div>
        </div>

        <List aria-labelledby="nav-list-browse">
          <ListItem>
            <ListItemButton>
              <ListItemDecorator>
                <EggOutlinedIcon sx={{ fontSize: "lg" }} />
              </ListItemDecorator>
              <ListItemContent
                sx={{ fontSize: "17px", color: "grey", fontWeight: "lg" }}
              >
                Dariry & Eggs
              </ListItemContent>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton>
              <ListItemDecorator>
                <DinnerDiningOutlinedIcon sx={{ fontSize: "lg" }} />
              </ListItemDecorator>
              <ListItemContent
                sx={{ fontSize: "17px", color: "grey", fontWeight: "lg" }}
              >
                Breakfast
              </ListItemContent>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton>
              <ListItemDecorator>
                <IcecreamOutlinedIcon sx={{ fontSize: "lg" }} />
              </ListItemDecorator>
              <ListItemContent
                sx={{ fontSize: "17px", color: "grey", fontWeight: "lg" }}
              >
                Frozen
              </ListItemContent>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton>
              <ListItemDecorator>
                <RamenDiningOutlinedIcon sx={{ fontSize: "lg" }} />
              </ListItemDecorator>
              <ListItemContent
                sx={{ fontSize: "17px", color: "grey", fontWeight: "lg" }}
              >
                Vegetables
              </ListItemContent>
              <KeyboardArrowRight />
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton>
              <ListItemDecorator>
                <LunchDiningOutlinedIcon sx={{ fontSize: "lg" }} />
              </ListItemDecorator>
              <ListItemContent
                sx={{ fontSize: "17px", color: "grey", fontWeight: "lg" }}
              >
                Fruits & Vegetables
              </ListItemContent>
              <KeyboardArrowRight />
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton>
              <ListItemDecorator>
                <SoupKitchenOutlinedIcon sx={{ fontSize: "lg" }} />
              </ListItemDecorator>
              <ListItemContent
                sx={{ fontSize: "17px", color: "grey", fontWeight: "lg" }}
              >
                Dariry & Eggs
              </ListItemContent>
              <KeyboardArrowRight />
            </ListItemButton>
          </ListItem>
        </List>
      </ListItem>
    </List>
  );
}
