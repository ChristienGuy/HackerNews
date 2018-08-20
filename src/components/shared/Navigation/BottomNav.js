import React from "react";
import { Link } from "@reach/router";
import styled from "styled-components";

const Nav = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  background-color: #5E525C;
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;

  list-style: none;
  padding: 0;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

const BottomNav = () => (
  <Nav>
    <List>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="new">New</NavLink>
      </li>
    </List>
  </Nav>
);

export default BottomNav;
