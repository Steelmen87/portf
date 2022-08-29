import React from 'react';
import s from "./RemoteWorks.module.css"
import style from "../common/styles/Container.module.css"
import {Button} from "../common/Button/Button";

const RemoteWork = () => {
    return (
        <div className={s.remoteBlock}>
            <div className={`${style.container} ${s.remoteContainer}`}>
                <h2 className={s.title}>I am considering the option of remote work</h2>
                <Button title={'Hire me'}/>
            </div>
        </div>
    );
};

export default RemoteWork;
