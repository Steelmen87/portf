import React from 'react';
import s from "./Main.module.css"
import stylesContainer from "../common/styles/Container.module.css"

const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={`${stylesContainer.container} ${s.mainBlock_container}`}>
                <div className={s.text}>
                    <span>Hi There</span>
                    <h1>I am Petrov Konstantin</h1>
                    <p>Front end Developer</p>
                </div>
                <div className={s.photo}></div>
            </div>
        </div>
    );
};

export default Main;