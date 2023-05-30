import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
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
  const theme = useTheme();
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

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        sx={{ backgroundColor: "white", height: "5rem", boxShadow: "none" }}
        className="w-[80%]"
      >
        <Toolbar className="w-full h-full shadow-md flex items-center justify-end ">
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
            <span className="text-sm mx-2 font-semibold uppercase transition">
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
      <Box component="main" sx={{ p: 3 }}>
        <DrawerHeader />
      </Box>
    </Box>
  );
}
