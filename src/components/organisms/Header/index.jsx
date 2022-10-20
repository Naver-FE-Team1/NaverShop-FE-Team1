import "./header.scss";
import Search from "../../../assets/Search.svg";
import { ReactComponent as Cart } from "../../../assets/Shopping--cart.svg";
import { ReactComponent as User } from "../../../assets/User--avatar.svg";
import { ReactComponent as MenuLogo } from "../../../assets/Menu.svg";
import { stack as Menu } from "react-burger-menu";
import { useNavigate } from "react-router-dom";
import { Button, Paper, Popper } from "@mui/material";
import { useState } from "react";
import { auth } from "../../../firebase/firebase-config"
import { signInWithEmailAndPassword } from "firebase/auth";

const navItems = [
  {
    icon: null,
    title: "Home",
    path: "/",
  },
  {
    icon: null,
    title: "Products",
    path: "/product",
  },
  {
    icon: null,
    title: "About us",
    path: "/about",
  },
  {
    icon: <User />,
    title: "User",
    path: "/",
  },
  {
    icon: <Cart />,
    title: "Cart",
    path: "/shopping-basket",
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
        <p className="logo" onClick={() => navigate("/")}>
          Avion
        </p>
        <nav className="nav-bar d-flex align-items-center justify-content-between">
          <img className="search" src={Search} alt="" />
          <div className="inner-nav">
            <Cart
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/shopping-basket")}
              className="cart"
            />
            <User
              onClick={handleOpenPopover}
              className="user" style={{ cursor: "pointer" }} />
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
                      signInWithEmailAndPassword(auth, "oitroioi@gmail.com", "hunghung1")
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
                </Paper>
              </Popper>
            )}

            <div className="burger">
              <Menu customBurgerIcon={<MenuLogo />}>
                {navItems.map((item, idx) => (
                  <li
                    key={idx}
                    onClick={() => navigate(item.path)}
                    className="menu-item"
                  >
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
            <li onClick={() => navigate(`${item.path}`)} key={idx}>
              {item.title}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
