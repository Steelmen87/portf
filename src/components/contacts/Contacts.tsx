import React from 'react';
import s from "./Contacts.module.css"
import style from "../common/styles/Container.module.css"
import {Button} from "../common/Button/Button";
import Inscription from "../../temp/Inscription";

const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${style.container} ${s.contactsContainer}`}>
                <Inscription firstWord={'get in'}highlightedWord={'touch'} titleBG={'contact'}/>
                <form action="#" className={s.form}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea />
                </form>
                <Button title={'To send'}/>
            </div>
        </div>
    );
};

export default Contacts;
