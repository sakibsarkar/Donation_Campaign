import "./Cards.css";
import Card from "../Card/Card";
import { useEffect, useState } from "react";

const Cards = ({ searchValue }) => {
    const [cardInfo, setCardInfo] = useState([])

    useEffect(() => {
        fetch("https://sakibsarkar.github.io/Donation_api/donation_api.json")
            .then(res => res.json())
            .then(data => {
                const filter = data.filter((data) => data.Category.toLowerCase().includes(searchValue.toLowerCase()))
                setCardInfo(filter)
            })
    }, [searchValue])

    return (
        <div className="cardContainer">
            {
                cardInfo.map(card => <Card key={card.id} card={card}></Card>)
            }
        </div>
    );
};

export default Cards;