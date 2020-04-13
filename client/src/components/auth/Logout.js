import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../actions/authActions";
import { NavLink } from "reactstrap";

export default function Logout() {
  const dispatch = useDispatch();
  return (
    <>
      <NavLink onClick={() => dispatch(logout())} href="#">
        Logout
      </NavLink>
    </>
  );
}
