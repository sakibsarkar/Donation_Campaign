function addOnLS(value) {
    let oldDonations = JSON.parse(localStorage.getItem("donation"))
    let newDonation = []
    if (oldDonations.length < 12) {
        newDonation = [...oldDonations, value]
        localStorage.setItem("donation", JSON.stringify(newDonation))
        return
    }
    // localStorage.setItem("donation", JSON.stringify(newDonation))


}

export { addOnLS }