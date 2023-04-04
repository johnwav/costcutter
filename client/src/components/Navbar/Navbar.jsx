import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/images/en.png" alt="" />
            <ArrowDropDownIcon />
          </div>
          <div className="item">
            <span>NGN</span>
            <ArrowDropDownIcon />
          </div>
          <div className="item">
            <NavLink className="link" to={"/products/1"}>
              Women
            </NavLink>
          </div>
          <div className="item">
            <NavLink className="link" to={"/products/2"}>
              Men
            </NavLink>
          </div>
          <div className="item">
            <NavLink className="link" to={"/products/3"}>
              Children
            </NavLink>
          </div>
        </div>
        <div className="center">
          <NavLink className="link" to={"/"}>
            COSTCUTTER
          </NavLink>
        </div>
        <div className="right">
          <div className="item">
            <NavLink className="link" to={"/"}>
              About
            </NavLink>
          </div>
          <div className="item">
            <NavLink className="link" to={"/"}>
              Contact
            </NavLink>
          </div>
          <div className="item">
            <NavLink className="link" to={"/"}>
              Stores
            </NavLink>
          </div>
          <div className="icons">
            <SearchIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <div className="cartIcon">
              <ShoppingCartOutlinedIcon />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
