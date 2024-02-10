import Child from "./Child.jsx"
import {useState} from "react";

export default function Parent() {
    const[color, setColor] = useState(true);

    function clickHandle(){
        setColor(!color)
    }
    return (
        <>
            <button
                onClick={clickHandle}
                style={{backgroundColor: color ? "green" : "red"}}
            >
                Change Color
            </button>
            <Child/>
        </>

    );
}

