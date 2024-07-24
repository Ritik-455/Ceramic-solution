import React from "react";

function Comnheading(props) {
    return (
        <h2 className={` ${props.spacing} font-Plus font-semibold lg:text-4xl text-3xl xl:text-2xxl xl:leading-[70.56px] text-black ${props.align} capitalize`}>
            {props.text}
        </h2>
    )
}
export default Comnheading