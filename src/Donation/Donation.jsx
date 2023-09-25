import "./Donation.css";
import MyDonations from "./MyDonations/MyDonations";
import { useEffect, useState } from "react";
import { ImSad } from "react-icons/im";

const Donation = () => {

    const [myDonations, SetMyDonations] = useState([])
    const [isSeeAll, setIsSeeAll] = useState(false);
    const [isHidden, setIsHidden] = useState(true);

    const showAll = () => {
        setIsSeeAll(!isSeeAll)
        setIsHidden(!isHidden)

    }
    useEffect(() => {
        const donations = JSON.parse(localStorage.getItem("donation"))
        const extractedDonations = [...donations]

        if (isSeeAll) {
            SetMyDonations(donations)
            return
        }

        if (donations.length > 4) {
            SetMyDonations(extractedDonations.splice(0, 4))
            setIsHidden(false)

        }
        else {
            SetMyDonations(donations)

        }


    }, [isSeeAll])


    return (
        <div className="wrappper">
            {
                myDonations.length == 0 ?

                    <div className="noDonation">
                        <img src="https://i.ibb.co/XzBp8dG/family-couple-saving-money-74855-5240.jpg" alt="" />
                        <p>looks like you haven't donated yeet <ImSad></ImSad> </p>
                    </div>

                    :
                    <div>

                        <div className="myDonations">
                            {
                                myDonations.map((donation, id) => <MyDonations key={id} donation={donation}></MyDonations>)
                            }

                        </div>

                        <div className="seeAll">
                            <button style={{ display: `${isHidden ? "none" : "block"}` }} onClick={showAll}>See all..</button>

                        </div>




                    </div>

            }
        </div >
    );
};

export default Donation;