import React from 'react';
import s from "./Work.module.css"
import {Button} from "../../common/Button/Button";

type propsType = {
    img: string
    title: string
    description: string
}
const Work = ({title, description, img}: propsType) => {
    return (
        <div className={s.work}>
            <div className={s.img}
                 style={{
                     backgroundImage: `url(${img})`,
                     backgroundRepeat: 'no-repeat',
                     backgroundPosition: 'center'
                 }}>
                <Button title={'Click me'}/>
            </div>
            <h4 className={s.title}>{title}</h4>
            <span className={s.description}>{description}</span>
        </div>
    );
};

export default Work;