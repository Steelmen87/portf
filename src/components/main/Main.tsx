import React from 'react';
import s from "./Main.module.css"
import stylesContainer from "../common/styles/Container.module.css"
import photo from '../common/img/main_photo.png'
import Title from "../../temp/title/Title";

const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={`${stylesContainer.container} ${s.mainBlock_container}`}>
                <div className={s.text}>
                    <Title firstWord={"I'm Petrov Konstantin."} highlightedWord={"Web Developer"}/>
                </div>
                <div className={s.photo}>
                    <img src={photo} alt='photo' width={'320px'}/>
                </div>
            </div>
        </div>
    );
};

export default Main;