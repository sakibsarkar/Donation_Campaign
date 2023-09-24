import "./Cards.css";
import Card from "../Card/Card";
import { useEffect, useState } from "react";

const Cards = () => {
    const [cardInfo, setCardInfo] = useState([])
    useEffect(() => {
        fetch("Data.json")
            .then(res => res.json())
            .then(data => setCardInfo(data))
    }, [])
    return (
        <div className="cardContainer">
            {
                cardInfo.map(card => <Card key={card.id} card={card}></Card>)
            }
        </div>
    );
};

export default Cards;