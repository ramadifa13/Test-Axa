import React, { useState } from "react";
import { AppBar, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import logoTitle from "../../Assets/image/title.png";
import {
  CustomTypography,
  StyledImage,
  StyledInputBase,
  StyledSvgIconSearch,
  StyledSvgIconShop,
  StyledSvgIconProfile,
} from "./AppNavBarStyle";
import { linkItem } from "../../constants";
import { ReactComponent as svgSearch } from "../../Assets/image/search.svg";
import { ReactComponent as svgShop } from "../../Assets/image/shop.svg";
import { ReactComponent as svgProfile } from "../../Assets/image/profile.svg";

const AppNavBar = () => {
  const [select, setSelect] = useState("");
  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#ffff" }}>
      <Toolbar>
        {/* logo image  */}
        <Link to={`/`} style={{ textDecoration: "none" }}>
          <StyledImage src={logoTitle} alt={"logo-title"} />
        </Link>
        {/* item menu */}
        {linkItem.map((d) => {
          return (
            <CustomTypography
              component={Link}
              to={`/${d}`}
              onClick={() => {
                setSelect(d);
              }}
              style={{
                borderBottom: select === d ? "1px solid #323232" : 0,
                fontFamily: select === d ? "Font2" : "Font1",
              }}
            >
              {d}
            </CustomTypography>
          );
        })}
        {/* Search Bar */}
        <div style={{ flexGrow: 1 }} />
        <div style={{ display: "flex", alignItems: "center" }}>
          <StyledSvgIconSearch
            component={svgSearch}
            viewBox="0 0 24 24"
            fontSize="medium"
          />
          <StyledInputBase />
        </div>
        {/* shop Section */}
        <StyledSvgIconShop
          component={svgShop}
          viewBox="0 0 24 24"
          fontSize="medium"
        />
        {/* Profile Section */}
        <StyledSvgIconProfile
          component={svgProfile}
          viewBox="0 0 24 24"
          fontSize="medium"
        />
      </Toolbar>
    </AppBar>
  );
};

export default AppNavBar;
