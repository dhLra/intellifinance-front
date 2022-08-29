import axios from "axios";

const url = "http://localhost/intellifinance/api/GetModalData.php"

export const getModalData = async (userID) => {

    const res = await axios.post(url, {
        data: {
            id_user: userID
        },
        headres: {
            "content-Type": "application/json"
        }
    })
    const userData = res.data;
    return (userData);
}