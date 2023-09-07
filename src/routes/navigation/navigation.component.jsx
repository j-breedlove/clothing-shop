// 1. Node Modules
import React, { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

// 2. Components
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import CartIcon from "../../components/cart-icon/cart-icon.component";

// 3. Assets & Styles
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import {
  NavigationContainer,
  LogoContainer,
  NavLink,
  NavLinks,
} from "./navigation.styles";

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
      <NavigationContainer>
        <LogoContainer to={"/"}>
          <CrownLogo className={"logo"} />
        </LogoContainer>
        <NavLinks>
          <NavLink to={"/shop"}>Shop</NavLink>
          {currentUser ? (
            <NavLink as={"span"} onClick={signOutUser} to={""}>
              Sign Out
            </NavLink>
          ) : (
            <NavLink to={"/auth"}>
              <span className={"nav-link"}>Sign In</span>
            </NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
