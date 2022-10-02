import axios from "axios";
import React, { useState } from "react";

const url = "http://localhost/intellifinance/api/GetMapData.php"

const GetMapData = () => {
    const [data, setData] = useState([])


    export const getMapData = async (userID) => {

        const res = await axios.post(url, {
            data: {
                id_user: userID,
            },
            headres: {
                "Content-Type": "application/json"
            }
        })

        res.data.map(item => {
            axios.get(`https://www.mapquestapi.com/geocoding/v1/batch?key=bvPE7eIjhq7GQ6cKbYA1PkjSyymkskLL&location=${item.address} ${item.address_number},${item.city},${item.federal_state},Brazil`)
                .then((res) => {
                    setData(res.data)
                })
        })

        //console.log(points)

        /* const ponits = await axios.get(`https://www.mapquestapi.com/geocoding/v1/batch?key=bvPE7eIjhq7GQ6cKbYA1PkjSyymkskLL&location=
         ${res.data.address},
         ${res.data.adrress_number}
         ${res.data.city},
         ${res.data.federal_state},Brazil`)
     
         console.log(ponits.data);*/

         return data

    }
} export default GetMapData