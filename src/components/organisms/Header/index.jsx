import "./header.scss";
import Search from "../../../assets/Search.svg";
import { ReactComponent as Cart } from "../../../assets/Shopping--cart.svg";
import { ReactComponent as User } from "../../../assets/User--avatar.svg";
import { ReactComponent as MenuLogo } from "../../../assets/Menu.svg";
import { stack as Menu } from "react-burger-menu";

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
  return (
    <header className="landingpage-header d-flex flex-column justify-content-between align-items-center">
      <div className="upper-nav d-flex justify-content-between align-items-center">
        <p className="logo">Avion</p>
        <nav className="nav-bar d-flex align-items-center justify-content-between">
          <img className="search" src={Search} alt="" />
          <div className="inner-nav">
            <Cart className="cart" />
            <User className="user" />
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
