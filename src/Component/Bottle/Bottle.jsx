import './bottle.css'

const Bottle = ({bottle,handleAddCard,handleBottle}) => {
    const{id,name,price,img}= bottle
    console.log(bottle)
    return (
        <div className="bottle">
            <h3>Bottle:{name}</h3>
            <img src={img} alt="" />
            <h4>Price: ${price}</h4>
            <button onClick={()=>handleAddCard(bottle)}>perchese</button>
            <button onClick={()=>handleBottle(img)} >show Bottle</button> 
            
        </div>
    );
};

export default Bottle;