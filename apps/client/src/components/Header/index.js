import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Drawer,
  Link,
  MenuItem,
  Button,
  IconButton,
} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu'
import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import squidShopLogo from '../../assets/squidshop-logo.png';

// https://github.com/vuonga1103/responsive-header-tutorial
const headersData = [
  {
    label: "Products",
    href: "/",
  },
  {
    label: "Sign In",
    href: "/login",
  },
];

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#400CCC",
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
  },
  logo: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    color: "#FFFEFE",
    textAlign: "left",
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  drawerContainer: {
    padding: "20px 30px",
  },
  logoImg: {
    maxWidth: 40,
    marginRight: '0.5em'
  },
}));

export default function Header() {
  const { header, logo, menuButton, toolbar, drawerContainer, logoImg } = useStyles();
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false
  });
  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    }
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        {femmecubatorLogo}
        <div>{getMenuButtons()}</div>
      </Toolbar>
    );
  };

  const femmecubatorLogo = (
    <div style={{ display: 'inline-flex' }}>
      <img src={squidShopLogo} alt="logo" className={logoImg} />
      <Typography variant="h6" component="h1" style={{ margin: 'auto' }}>
        SquidShop
      </Typography>
    </div>
  );

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            color: "inherit",
            to: href,
            className: menuButton,
            component: RouterLink,
          }}
        >
          {label}
        </Button>
      );
    });
  };

  const getDrawerChoices = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Link
          {...{
            component: RouterLink,
            to: href,
            color: "inherit",
            style: { textDecoration: "none" },
            key: label,
          }}
        >
          <MenuItem>{label}</MenuItem>
        </Link>
      );
    });
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>
        <div>{femmecubatorLogo}</div>
      </Toolbar>
    );
  };

  return (
    <header>
      <AppBar className={header}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
}