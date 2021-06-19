import React, { useState } from "react";
import { Container, Menu } from "semantic-ui-react";
import CartSummary from "./CartSummary";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";
import { NavLink, useHistory } from "react-router-dom";

const Navi = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

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
          <Menu.Item name="home" as={NavLink} to="/" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
            <CartSummary />
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
