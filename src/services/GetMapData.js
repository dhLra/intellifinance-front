import axios from "axios";

const url = "http://localhost/intellifinance/api/GetMapData.php"

export const getMapData = async (userID) => {

    const res = await axios.post(url, {
        data: {
            id_user: userID,
        },
        headres: {
            "Content-Type": "application/json"
        }
    })

    const allPoints = await Promise.all(res.data.map((item) => {
        return axios.get(`https://www.mapquestapi.com/geocoding/v1/batch?key=li2PDbgnGX8ddG7NE23uUOGPxJ8AfHPI&location=${item.address} ${item.address_number},${item.city},${item.federal_state},Brazil`)
    }))

    const allLatLng = allPoints.map((item) => {
        return { lat: item.data.results[0].locations[0].latLng.lat, lng: item.data.results[0].locations[0].latLng.lng }
    })

    return allLatLng

}

