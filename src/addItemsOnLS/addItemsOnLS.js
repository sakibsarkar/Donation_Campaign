function addOnLS(value) {
    let oldDonations = JSON.parse(localStorage.getItem("donation"))
    let newDonation = [...oldDonations, value]
    localStorage.setItem("donation", JSON.stringify(newDonation))


}

export { addOnLS }