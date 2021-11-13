import React from "react";

type ClockProps = {
    countdown: number;
    title: string;
    position: "left" | "right"
};

export default function Clock({ countdown, title, position }: ClockProps) {
    return  (
        <div className={`float-${position}  bg-blue-400 w-1/5 p-2`} >
        <p className="text-center text-white">{title}</p>
        <p className="text-center  text-3xl mt-2">
            {countdown} secs
        </p>
    </div>
    )
}
