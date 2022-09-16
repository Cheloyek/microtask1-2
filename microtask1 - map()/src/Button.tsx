import React from "react";

export const Buttons = () => {
    const myFirstSubscriber = () => {
        console.log("Hello, 1")
    }
    return (
    // <button onClick={(event)=>{console.log("Hello")}}>My youtube channel -1 </button>
    <button onClick={myFirstSubscriber}>My youtube channel -2 </button>
    )
}