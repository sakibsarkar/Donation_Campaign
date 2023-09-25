import "./Donation.css";
import MyDonations from "./MyDonations/MyDonations";
import { useEffect, useState } from "react";
import { ImSad } from "react-icons/im";

const Donation = () => {

    const [myDonations, SetMyDonations] = useState([])
    useEffect(() => {
        const donations = JSON.parse(localStorage.getItem("donation"))
        SetMyDonations(donations)

    }, [])
    return (
        <div className="wrappper">
            {
                myDonations.length == 0 ?

                    <div className="noDonation">
                        <img src="https://i.ibb.co/XzBp8dG/family-couple-saving-money-74855-5240.jpg" alt="" />
                        <p>looks like you haven't donated yeet <ImSad></ImSad> </p>
                    </div>

                    :

                    <div className="myDonations">
                        {
                            myDonations.map((donation, id) => <MyDonations key={id} donation={donation}></MyDonations>)
                        }
                    </div>
            }
        </div >
    );
};

export default Donation;