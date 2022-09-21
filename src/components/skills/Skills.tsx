import React from 'react';
import s from "./Skills.module.css"
import style from "../common/styles/Container.module.css"
import Skill from "./skill/Skill";
import Inscription from "../../temp/Inscription";

const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${style.container} ${s.skillsContainer}`}>
                <Inscription firstWord={'my'}highlightedWord={'hard'} titleBG={'Skills'}/>
                <div className={s.skills}>
                    <Skill
                        title={'Css'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
                    />
                    <Skill
                        title={'Html'}
                        description={'Aliquam consequatur earum esse est itaque natus similique.'}
                    />
                    <Skill
                        title={'React'}
                        description={'Ab, cons agnam modi nam possimus quasi repellendus repudiandae voluptates?'}
                    /><Skill
                        title={'React-Router-Dom'}
                        description={'Ab, cons agnam modi nam possimus quasi repellendus repudiandae voluptates?'}
                    /><Skill
                        title={'Redux'}
                        description={'Ab, cons agnam modi nam possimus quasi repellendus repudiandae voluptates?'}
                    />
                </div>
            </div>
        </div>
    );
};

export default Skills;