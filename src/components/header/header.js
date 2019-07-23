import React from 'react';
import { Logo } from "../logo/logo";
import { SearchField } from "../searchField/searchField";
import './header.scss';

export const Header = () => {
    return (
      <div className="header">
        <Logo />
		<SearchField />
      </div>
    )
}