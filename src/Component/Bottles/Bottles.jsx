import { useEffect } from "react";
import { useState } from "react";

const Bottles = () => {
    const[bottles,setbottles] = useState([])
    useEffect(()=>{
        fetch('bottle.json')
        .then(res => res.json())
        .then(data =>setbottles(data))
    },[])
    return (
        <div>
            <h3>Bottols hear:{bottles.length}</h3>
            
        </div>
    );
};

export default Bottles;