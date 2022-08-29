import React from 'react';
import s from "./Contacts.module.css"
import style from "../common/styles/Container.module.css"
import {Button} from "../common/Button/Button";

const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${style.container} ${s.contactsContainer}`}>
                <h2 className={s.title}>Contacts</h2>
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
