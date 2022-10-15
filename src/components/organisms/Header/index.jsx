import "./header.scss";
import Search from "../../../assets/Search.svg";
import { ReactComponent as Cart } from "../../../assets/Shopping--cart.svg";
import { ReactComponent as User } from "../../../assets/User--avatar.svg";
import { ReactComponent as MenuLogo } from "../../../assets/Menu.svg";
import { stack as Menu } from "react-burger-menu";
import { Divider, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Paper, Popper } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

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
        <p className="logo">Avion</p>
        <nav className="nav-bar d-flex align-items-center justify-content-between">
          <img className="search" src={Search} alt="" />
          <div className="inner-nav">
            <IconButton className="cart" aria-label="cart">
              <Cart />
            </IconButton>
            <IconButton
              aria-describedby={openPopover ? "user-button" : undefined}
              className="user"
              onClick={handleOpenPopover}
              aria-label="user"
            >
              <User />
            </IconButton>
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
                <Paper >
                  <List>
                    <Link to={`/user/${auth.currentUser.uid}`}>
                      <ListItemButton>
                        <ListItemText primary="Profile" />
                      </ListItemButton>
                    </Link>

                    <Divider />

                    {/* TESTING */}
                    <ListItemButton onClick={() => {
                      signInWithEmailAndPassword(auth, "vandangnhathung10@gmail.com", "hunghung1")
                        .then((cred) => {
                          console.log("header", cred.user)
                        })
                        .catch(err => {
                          console.log(err)
                        })
                    }}>
                      <ListItemText primary="Test: Log in" />
                    </ListItemButton>
                  </List>
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
