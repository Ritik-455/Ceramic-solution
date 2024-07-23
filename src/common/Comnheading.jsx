import React from "react";

function Comnheading(props) {
    return (
        <h2 className={` ${props.spacing} font-Plus font-semibold text-2xxl leading-[70.56px] text-black ${props.align} capitalize`}>
            {props.text}
        </h2>
    )
}
export default Comnheading