import { styled, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import { BiArrowToLeft } from "react-icons/bi";
import {
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useState } from "react";
import { AiFillDashboard, AiTwotoneHome } from "react-icons/ai";
import { BsPeopleFill, BsFillGridFill } from "react-icons/bs";
import { TbMilitaryAward } from "react-icons/tb";
import { GiCircleClaws } from "react-icons/gi";
import { TiMessages } from "react-icons/ti";
import { BiStats } from "react-icons/bi";
import { FaQuestionCircle } from "react-icons/fa";
import { RiFolderWarningLine } from "react-icons/ri";
import { LuBanknote } from "react-icons/lu";
import { MdWifiOff } from "react-icons/md";
import { AiOutlineWifi } from "react-icons/ai";
import { HiViewGrid } from "react-icons/hi";

import Card from "./dashboard/Card";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Dashboard() {
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [sidebarItems, setSidebarItems] = useState([
    {
      text: "Dashboard",
      active: true,
      icon: <AiFillDashboard className="text-xl font-bold text-cblack" />,
    },
    {
      text: "Deposit",
      active: false,
      icon: <LuBanknote className="text-xl font-bold text-cblack" />,
    },
    {
      text: "Affiliate program",
      active: false,
      icon: <BsPeopleFill className="text-xl font-bold text-cblack" />,
    },
    {
      text: "Bonuses",
      active: false,
      icon: <TbMilitaryAward className="text-xl font-bold text-cblack" />,
    },
    {
      text: "Home",
      active: false,
      icon: <AiTwotoneHome className="text-xl font-bold text-cblack" />,
    },
    {
      text: "FAQ",
      active: false,
      icon: <FaQuestionCircle className="text-xl font-bold text-cblack" />,
    },
    {
      text: "Affiliate program",
      active: false,
      icon: <BsPeopleFill className="text-xl font-bold text-cblack" />,
    },
    {
      text: "About Us",
      active: false,
      icon: <RiFolderWarningLine className="text-xl font-bold text-cblack" />,
    },
    {
      text: "Terms",
      active: false,
      icon: <GiCircleClaws className="text-xl font-bold text-cblack" />,
    },
    {
      text: "Statistics",
      active: false,
      icon: <BiStats className="text-xl font-bold text-cblack" />,
    },
    {
      text: "Plans",
      active: false,
      icon: <BsFillGridFill className="text-xl font-bold text-cblack" />,
    },
    {
      text: "Contacts",
      active: false,
      icon: <TiMessages className="text-xl font-bold text-cblack" />,
    },
  ]);

  const [cards, setCards] = useState([
    {
      coinType: "Binance Coin",
      amount: 0.000000000123,
      power: 0,
      imgSrc: "bnb.svg",
      color: "linear-gradient(to right, #8e2de2, #4a00e0)",
    },
    {
      coinType: "Tron",
      amount: 0.000000000123,
      power: 0,
      imgSrc: "tron.svg",
      color: "linear-gradient(to right, #2c5364, #203a43, #0f2027)",
    },
    {
      coinType: "Dodge Coin",
      amount: 0.000000000123,
      power: 0,
      imgSrc: "dogecoin.svg",
      color: "linear-gradient(45deg, #00b09b, #96c93d)",
    },
    {
      coinType: "Bit Coin",
      amount: 0.000000000123,
      power: 0,
      imgSrc: "bitcoin1.svg",
      color: "linear-gradient(45deg, #ee0979, #ff6a00)",
    },
  ]);

  const [accountSummary, setAccountSummary] = useState([
    {
      amount: 0.000000000123,
      icon: <AiOutlineWifi />,
      color: "success",
    },
    {
      amount: 0.000000000123,
      icon: <MdWifiOff />,
      color: "success",
    },
    {
      amount: 0.000000000123,
      icon: <HiViewGrid />,
      color: "success",
    },
  ]);

  return (
    <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        sx={{ backgroundColor: "white", height: "5rem", boxShadow: "none" }}
        className="w-[80%]"
      >
        <Toolbar className="w-full h-full shadow-md flex items-center justify-end">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
              borderRight: "2px solid black",
            }}
          >
            <img src="tron.svg" className="w-8 h-8 " />
          </IconButton>
          <IconButton
            color="inherit"
            onClick={handleDrawerOpen}
            className="w-[10%] h-[80%]"
          >
            <button className="w-full h-full rounded-tr-lg rounded-bl-lg bg-colord text-white text-base">
              Log out
            </button>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader
          sx={{ paddingY: "1.3rem" }}
          className="w-full flex items-center justify-between gap-8"
        >
          <div className="w-full h-full flex items-center justify-center gap-2">
            <img src="tron.svg" alt="" className="w-8 h-8" />
            <span className="text-xl font-bold text-cblack">TRX Mining</span>
          </div>
          <IconButton onClick={handleDrawerClose}>
            <BiArrowToLeft className="text-cblack" />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List
          sx={{
            px: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: "100%",
          }}
        >
          {open && (
            <span
              className="text-sm mx-2 font-semibold uppercase transition"
              onClick={() => setSidebarItems}
            >
              Account
            </span>
          )}
          {sidebarItems.slice(0, 4).map((item, index) => {
            const { text, active, icon } = item;
            return (
              <ListItem
                key={index}
                disablePadding
                sx={{ display: "block" }}
                className={`${
                  !active ? "bg-gray-200" : "bg-colord"
                } hover:bg-colord hover:text-white transition-all duration-300`}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={text}
                    sx={{ opacity: open ? 1 : 0 }}
                    className={`hover:text-white ${
                      active ? "text-white" : "text-cblack"
                    }`}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
          {open && (
            <span className="text-sm mx-2 font-semibold uppercase transition-all duration-300">
              other
            </span>
          )}
          {sidebarItems.slice(4).map((item, index) => {
            const { text, active, icon } = item;
            return (
              <ListItem
                key={index}
                disablePadding
                sx={{ display: "block" }}
                className={`${
                  !active ? "bg-gray-200" : "bg-colord"
                } hover:bg-colord hover:text-white transition-all duration-300 ${
                  active && "text-white"
                }`}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={text}
                    sx={{ opacity: open ? 1 : 0 }}
                    className={`hover:text-white ${
                      active ? "text-white" : "text-cblack"
                    }`}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
      <div className="w-[75%] h-full flex flex-col items-center justify-center pt-[8rem] py-[2rem] gap-8">
        <div className="w-full h-fit flex flex-col items-start justify-center gap-4">
          <span className="text-cblack text-4xl font-semibold">
            Hi, ishimweemmanuel2005 👋
          </span>
          <span className="w-full text-cblack text-start text-base font-semibold p-4 border border-cblack rounded-md bg-gray-200">
            Only today the bonus +5% to the deposit when replenishing from $25
          </span>
        </div>
        <div className="w-full h-fit flex flex-col items-center justify-center gap-4">
          <span className="text-cblack uppercase text-base font-bold self-start">
            power distribution
          </span>
          <div className="w-full h-fit flex items-center justify-between border-t border-t-gray-200 py-4 gap-4">
            {cards.map((card, index) => {
              return (
                <Card
                  key={index}
                  coinType={card.coinType}
                  amount={card.amount}
                  power={card.power}
                  imgSrc={card.imgSrc}
                  color={card.color}
                />
              );
            })}
          </div>
        </div>
        <div className="w-full h-fit flex flex-col items-center justify-center gap-4">
          <span className="text-cblack uppercase text-base font-bold self-start">
            Account summary
          </span>
        </div>
      </div>
    </Box>
  );
}
