import React, { useState } from "react";
import { Container, Menu } from "semantic-ui-react";
import CartSummary from "./CartSummary";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const Navi = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const { cartItems } = useSelector((state) => state.cart);

  const history = useHistory();

  const handleSignOut = (params) => {
    setIsAuthenticated(false);
    history.push("/");
  };

  const handleSignIn = (params) => {
    setIsAuthenticated(true);
  };

  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
            {cartItems.length > 0 && <CartSummary />}
            {isAuthenticated ? (
              <SignedIn signOut={handleSignOut} />
            ) : (
              <SignedOut signIn={handleSignIn} />
            )}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
};

export default Navi;
