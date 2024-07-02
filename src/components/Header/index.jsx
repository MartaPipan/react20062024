import React from 'react';
import Menu from "../Menu"

const Header = ({user:{ava}}) => {
    return (
        <header>
            <Menu />
            <img src={ava}  alt='ava' width={50}/>
        </header>
    );
}

export default Header;
