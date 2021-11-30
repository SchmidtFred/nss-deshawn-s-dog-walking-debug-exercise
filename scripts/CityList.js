import {getWalkers, getCities } from "./database.js"

const cities = getCities();


export const CityList = () => {
    let citiesHTML = "<ul>"

    for (const city of cities) {

        citiesHTML += `<li id="city--${city.id}">${city.name}</li>`
    }

    citiesHTML += "</ul>"

    return citiesHTML
}

// citylist - 3