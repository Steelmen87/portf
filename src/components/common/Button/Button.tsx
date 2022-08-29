import styleButton from "../styles/Buttom.module.css";
import React from "react";

type propsType = {
    title: string
}
export const Button = ({title}: propsType) => {
    return <div className={styleButton.button}>
        {title}
    </div>
}