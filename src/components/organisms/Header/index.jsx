import { useSelector } from "react-redux";
import "./header.scss";
import Search from "../../../assets/Search.svg";
import { ReactComponent as Cart } from "../../../assets/Shopping--cart.svg";
import { ReactComponent as MenuLogo } from "../../../assets/Menu.svg";
import { stack as Menu } from "react-burger-menu";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/auth-context";
import User from "../../molecules/User/User";
import { Badge } from "@mui/material";

const Header = ({ authen }) => {
  const getQuantities = useSelector((state) => state.basket.totalQuantity);
  const navigate = useNavigate();
  const { userInfo, loading, setLoading } = useAuth();

  const navItems = [
    {
      icon: null,
      title: "Home",
      path: "/",
    },
    {
      icon: null,
      title: "Products",
      path: "/products",
    },
    {
      icon: null,
      title: "About us",
      path: "/about",
    },
    {
      icon: <Cart />,
      title: "Cart",
      path: "/shopping-basket",
    },
    {
      icon: <User />,
      title: "User",
      path: "/",
    },
    {
      icon: null,
      title: "Sign In",
      path: "/sign-in",
    },
  ];

  return (
    <header className="landingpage-header d-flex flex-column justify-content-between align-items-center">
      <div className="upper-nav d-flex justify-content-between align-items-center">
        <p className="logo" onClick={() => navigate("/")}>
          Yame
        </p>
        <nav className="nav-bar d-flex align-items-center justify-content-between">
          <img className="search" src={Search} alt="" />
          <div className="inner-nav">
            <Badge badgeContent={getQuantities} color="primary">
              <Cart
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/shopping-basket")}
                className="cart"
              />
            </Badge>
            {!authen && <User></User>}
            <div className="burger">
              <Menu customBurgerIcon={<MenuLogo />}>
                {navItems.map((item, idx) => {
                  if (userInfo === null && item.title === "User") {
                    return null;
                  } else if (userInfo !== null && item.title === "Sign In") {
                    return null;
                  } else {
                    return (
                      <li
                        key={idx}
                        onClick={() => navigate(item.path)}
                        className="menu-item"
                      >
                        <p>{item.title}</p>
                      </li>
                    );
                  }
                })}
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
