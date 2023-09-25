import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

const Statistics = () => {
    const [donationData, setDonationData] = useState([])
    useEffect(() => {
        const donations = JSON.parse(localStorage.getItem("donation"))
        const donated = (donations.length * 100) / 12
        setDonationData(donated)

    }, [donationData])

    const data = [
        ["Task", "Hours per Day"],
        ["Your Donation", donationData],
        ["Total Donation", 100 - donationData],

    ];

    const options = {
        title: "Your donation proggress",
        slices: {
            0: { color: "#00C49F" },
            1: { color: "#FF444A" },
        }
    };

    return (
        <div>

            <Chart
                chartType="PieChart"
                data={data}
                options={options}
                width={"100%"}
                height={"700px"}
            />
        </div>
    );
};

export default Statistics;