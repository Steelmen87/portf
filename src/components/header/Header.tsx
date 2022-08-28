import React from 'react';
import s from "./Header.module.css"
import style from "../common/styles/Container.module.css"
import Nav from "../nav/Nav";

const Header = () => {
    return (
        <div className={s.header}>
            <div className={`${style.container} ${s.headerContainer}`}>
                <Nav/>
            </div>
        </div>
    );
};

export default Header;