// 1. Node Modules
import React, { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

// 2. Components
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import CartIcon from "../../components/cart-icon/cart-icon.component";

// 3. Assets & Styles
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import "./navigation.styles.scss";

// 4. Contexts & Hooks
import { CartContext } from "../../contexts/cart.context";
import { UserContext } from "../../contexts/user.context";

// 5. Utility functions & Constants
import { signOutUser } from "../../utils/firebase/firebase.utils";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  // console.log(currentUser);
  return (
    <Fragment>
      <div className={"navigation"}>
        <Link className={"logo-container"} to={"/"}>
          <CrownLogo className={"logo"} />
        </Link>
        <div className="nav-links-container">
          <Link className={"nav-link"} to={"/shop"}>
            Shop
          </Link>
          {currentUser ? (
            <span className={"nav-link"} onClick={signOutUser}>
              Sign Out
            </span>
          ) : (
            <Link className={"nav-link"} to={"/auth"}>
              <span className={"nav-link"}>Sign In</span>
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
