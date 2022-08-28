import React from 'react';
import s from "./Skill.module.css"

type propsType = {
    title: string
    description: string
}
const Skill = ({title, description}: propsType) => {
    return (
        <div className={s.skill}>
            <div className={s.icon}>

            </div>
            <h3>{title}</h3>
            <span className={s.description}>
                {description}
            </span>
        </div>
    );
};

export default Skill;