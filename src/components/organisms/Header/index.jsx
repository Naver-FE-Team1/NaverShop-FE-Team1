import "./header.scss";
import Search from "../../../assets/Search.svg";
import { ReactComponent as Cart } from "../../../assets/Shopping--cart.svg";
import { ReactComponent as User } from "../../../assets/User--avatar.svg";
import { ReactComponent as MenuLogo } from "../../../assets/Menu.svg";
import { stack as Menu } from "react-burger-menu";
import { Button, Divider, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Paper, Popper } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

//import stuffs to test
import { auth } from "../../../firebase/firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";


const navItems = [
  {
    icon: null,
    title: "Home",
  },
  {
    icon: null,
    title: "Products",
  },
  {
    icon: null,
    title: "About us",
  },
  {
    icon: <User />,
    title: "User",
  },
  {
    icon: <Cart />,
    title: "Cart",
  },
];

const Header = () => {
  const navigate = useNavigate();

  const [openPopover, setOpenPopover] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)
  const handleOpenPopover = (e) => {
    setOpenPopover(!openPopover)
    setAnchorEl(e.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header className="landingpage-header d-flex flex-column justify-content-between align-items-center">
      <div className="upper-nav d-flex justify-content-between align-items-center">
        <p className="logo">Yame</p>
        <nav className="nav-bar d-flex align-items-center justify-content-between">
          <img className="search" src={Search} alt="" />
          <div className="inner-nav">
            {/* <IconButton className="cart" aria-label="cart"> */}
            <Cart className="cart" />
            {/* </IconButton> */}
            {/* <IconButton
              aria-describedby={openPopover ? "user-button" : undefined}
              className="user"
              onClick={handleOpenPopover}
              aria-label="user"
            > */}
            <User className="user" onClick={handleOpenPopover} />
            {/* </IconButton> */}
            
            {openPopover && (
              <Popper
                id={"user-button"}
                open={openPopover}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchororigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                transformorigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
              >
                <Paper component={"nav"} elevation={3}>
                  <Button onClick={() => navigate(`/user/${auth.currentUser.uid}`)}>
                    user
                  </Button>

                  <Button
                    onClick={() => {
                      signInWithEmailAndPassword(auth, "123@gmail.com", "1234Qw")
                        .then((cred) => {
                          console.log("header", cred.user)
                        })
                        .catch(err => {
                          console.log(err)
                        })
                    }}
                  >
                    log in
                  </Button>

                  <Button
                    onClick={() => auth.signOut()} 
                  >
                    log out
                  </Button>
                  {/* <List>

                    <ListItemButton>
                      <Link to={`/user/${auth.currentUser.uid}`}>
                        <ListItemText primary="Profile" />
                      </Link>
                    </ListItemButton>

                    
                    <Divider />

                    <ListItemButton
                      onClick={() => {
                        signInWithEmailAndPassword(auth, "vandangnhathung10@gmail.com", "123456")
                          .then((cred) => {
                            console.log("header", cred.user)
                          })
                          .catch(err => {
                            console.log(err)
                          })
                      }}
                    >
                      <ListItemText primary="Test: Log in" />
                    </ListItemButton>

                    <Divider />

                    <ListItemButton
                      onClick={() => {
                        auth.signOut()
                      }}
                    >
                      <ListItemText primary="Test: Log out" />
                    </ListItemButton>

                  </List> */}
                </Paper>
              </Popper>
            )}

            <div className="burger">
              <Menu customBurgerIcon={<MenuLogo />}>
                {navItems.map((item, idx) => (
                  <li key={idx} className="menu-item">
                    {/* {item.icon !== null && item.icon} */}
                    <p>{item.title}</p>
                  </li>
                ))}
              </Menu>
            </div>
          </div>
        </nav>
      </div>
      <nav className="bottom-nav justify-content-center align-items-center">
        <ul className="d-flex justify-content-between align-items-center">
          {navItems.slice(0, 3).map((item, idx) => (
            <li key={idx}>{item.title}</li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
