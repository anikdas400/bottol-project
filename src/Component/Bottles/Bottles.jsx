import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'

const Bottles = () => {
    const[bottles,setbottles] = useState([])
    const [card,setCard]=useState([])
    const [bottle,setBottle] =useState([])
    useEffect(()=>{
        fetch('bottle.json')
        .then(res => res.json())
        .then(data =>setbottles(data))
        
    },[])
    const handleAddCard = bottle =>{
        const newCard =[...card,bottle]
        setCard(newCard)
    }
    const handleBottle = water=>{
        const newBottle =[...bottle,water]
        setBottle(newBottle)
    }
    return (
        <div>
            
            <h3>Bottols Hear:{bottles.length}</h3>
            <h3>card:{card.length}</h3>
            {/* show bottle */}
            <div className="bottle-show">
            {
                bottle.map(bottle => <img src= {bottle}></img>)
            }
            </div>
            

            <div className="bottle-container">

            {
                bottles.map(bottle => <Bottle 
                    key={bottle.id}
                    bottle={bottle}
                    handleAddCard={handleAddCard}
                    handleBottle={handleBottle}></Bottle>)
            }
            </div>
            
            
        </div>
    );
};

export default Bottles;