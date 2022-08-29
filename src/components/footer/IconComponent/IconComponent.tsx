import React from 'react';
import s from './IconComponent.module.css'
type propsType = {
    imgUrl: string
}
const IconComponent = ({imgUrl}: propsType) => {
    return (
        <div className={s.img}>
            {imgUrl}
        </div>
    );
};

export default IconComponent;