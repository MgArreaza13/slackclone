import React from "react";
import {
  HeaderContainer,
  HeaderLeft,
  HeaderAvatar,
  HeaderSearch,
  HeaderRight,
} from "./styles";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutLineIcon from "@material-ui/icons/HelpOutline";

function Header() {
  return (
    <HeaderContainer>
      {/* Header Left */}
      <HeaderLeft>
        <HeaderAvatar
        // TODO: add onclick
        />
        <AccessTimeIcon />
      </HeaderLeft>

      {/* Header Search */}
      <HeaderSearch>
        <SearchIcon />
        <input type="text" placeholder="search" />
      </HeaderSearch>

      {/* Header Right */}
      <HeaderRight>
        <HelpOutLineIcon />
      </HeaderRight>
    </HeaderContainer>
  );
}

export default Header;
