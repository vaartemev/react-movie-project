import React from 'react';
import Logo from "../logo/logo";
import '../../styles/header/header.scss';

export const Header = () => {
    return (
      <div className="header">
        <Logo />
        <Search />
      </div>
    )
}