import React from 'react';
import s from "./Footer.module.css"
import style from "../common/styles/Container.module.css"
import {Button} from "../common/Button/Button";
import IconComponent from "./IconComponent/IconComponent";

const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${style.container} ${s.footerContainer}`}>
                <h2 className={s.title}>Petrov Konstantin</h2>
                <div className={s.links_to_networks}>
                    <IconComponent imgUrl={''}/>
                    <IconComponent imgUrl={''}/>
                    <IconComponent imgUrl={''}/>
                    <IconComponent imgUrl={''}/>
                </div>
                <h2 className={s.title}>© 2022 All rights reserved.</h2>
            </div>
        </div>
    );
};

export default Footer;
