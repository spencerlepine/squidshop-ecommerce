import * as React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  Link,
  MenuItem,
  Button,
  IconButton,
} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu'
import { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import useAuth from 'context/AuthContext';
import useDemoSettings from 'context/DemoSettingsContext';
import SearchBar from "components/Catalog/SearchBar";
import squidShopLogo from 'assets/squidshop-logo.png';
import { makeStyles } from "@material-ui/core";

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

const defaultRoutes = [
  {
    label: "Departments",
    href: "/catalog"
  },
  {
    label: "Sign In",
    href: "/login",
  }
];

const authenticatedRoutes = [
  {
    label: "Departments",
    href: "/catalog"
  },
  {
    label: "Cart",
    href: "/cart",
  },
  {
    label: "Account",
    href: "/account",
  }
];
const headerDataTemplate = (isLoggedIn: any) => (isLoggedIn ? authenticatedRoutes : defaultRoutes);

const Header = () => {
  const { isLoggedIn, currentUser } = useAuth();
  const { useDemoData } = useDemoSettings();

  const loggedInMode = useDemoData || isLoggedIn;

  const { header, logo, menuButton, toolbar, drawerContainer, logoImg } = useStyles();
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false
  });

  const [headersData, setHeadersData] = useState(headerDataTemplate(loggedInMode))
  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    setHeadersData(headerDataTemplate(useDemoData || isLoggedIn))
  }, [isLoggedIn, useDemoData, currentUser])

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 950
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
        <SquidshopLogo />
        <SearchBar />
        <div>{getMenuButtons()}</div>
      </Toolbar>
    );
  };

  const SquidshopLogo = () => (
    <Link to="/" component={RouterLink} style={{ color: 'inherit', textDecoration: 'inherit' }}>
      <div style={{ display: 'inline-flex' }}>
        <img src={squidShopLogo} alt="logo" className={logoImg} />

        <Typography variant="h6" component="h1" style={{ margin: 'auto' }} role="heading">
          SquidShop
        </Typography>
      </div>
    </Link>
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
        <SquidshopLogo />
        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>
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

export default Header;
