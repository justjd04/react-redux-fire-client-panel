import React from "react";
import { Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";

const SignedInLinks = ({ signOut, profile }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "50%",
        listStyle: "none",
      }}
    >
      <NavItem>{profile.name}</NavItem>
      <NavItem>
        <NavLink exact={true} to="/">
          Dashboard
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/setting">Setting</NavLink>
      </NavItem>
      <NavItem>
        <div style={{ cursor: "pointer" }} onClick={signOut}>
          Logout
        </div>
      </NavItem>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
