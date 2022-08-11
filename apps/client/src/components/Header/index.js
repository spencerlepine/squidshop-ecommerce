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
import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import useAuth from '../../context/AuthContext';
import headerDataTemplate from './headerLinkData';
import SearchBar from "../SeachBar";
import squidShopLogo from '../../assets/squidshop-logo.png';
import useStyles from './styles';

// should render squidshop logo
// should render squidshop name
// should render search bar
// should render departments link
// should render login button by default
// should render cart link when logged in
// should render account link

// https://github.com/vuonga1103/responsive-header-tutorial

const Header = () => {
  const { isLoggedIn } = useAuth();
  const { header, logo, menuButton, toolbar, drawerContainer, logoImg } = useStyles();
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false
  });
  
  const [headersData, setHeadersData] = useState(headerDataTemplate(isLoggedIn))
  const { mobileView, drawerOpen } = state;
  
  useEffect((prevState) => {
    if (isLoggedIn !== prevState) {
      setHeadersData(headerDataTemplate(isLoggedIn))
    }
  }, [isLoggedIn])

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
        <SquidshopLogo />
        <SearchBar />
        <div>{getMenuButtons()}</div>
      </Toolbar>
    );
  };

  const SquidshopLogo = () => (
    <Link to="/" component={RouterLink} style={{ color: 'inherit', textDecoration: 'inherit'}}>
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
