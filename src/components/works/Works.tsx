import React from 'react';
import s from "./Works.module.css"
import style from "../common/styles/Container.module.css"
import Work from "./work/Work";

const Works = () => {
    return (
        <div className={s.worksBlock}>
            <div className={`${style.container} ${s.worksContainer}`}>
                <h2 className={s.title}>Works</h2>
                <div className={s.works}>
                    <Work
                        img={'https://avatars.mds.yandex.net/i?id=315192c3cd00428d13c616efaf5d6aef-5235680-images-thumbs&n=13'}
                        title={'SamuriJS'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
                    />
                    <Work
                        img={'https://avatars.mds.yandex.net/i?id=b5a93332255fd27c77ad08cd629bc777-4079549-images-thumbs&n=13'}
                        title={'Todo list'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
                    />
                    <Work
                        img={'https://avatars.mds.yandex.net/i?id=2a00000179f8434f91b2a6446e6bb934d3b4-4615799-images-thumbs&n=13'}
                        title={'Google map'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
                    />


                </div>
            </div>
        </div>
    );
};

export default Works;