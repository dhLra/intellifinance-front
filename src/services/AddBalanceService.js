import axios from "axios";

const url = "http://localhost/intellifinance/api/GetAddBalance.php"

export const addBalance  = async (userID, amount) => {

    const res = await axios.post(url, {
        data:{
            id_user: userID,
            amount: amount
        },
        headres:{
            "content-Type": "application/json"
        }
    })
    const status = res.data;
    console.log(status)
}