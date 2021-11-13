import React from "react";

type ButtonProps = {
    text: string;
    textColor?: string;
    bgColor?: string;
    hoverBgColor?: string;
    onClick?: ()=> any;

}

export default function Button({text,
                                   textColor = 'text-white',
                                   bgColor = 'bg-blue-800',
                                   hoverBgColor = 'bg-blue-700' ,
                                   onClick}: ButtonProps){


    const className = `${bgColor} hover:${hoverBgColor } ${textColor} w-32 font-bold py-2 px-4 rounded`

    return(
        <button onClick={onClick}
            className={className}>
            {text}
        </button>
    )
}