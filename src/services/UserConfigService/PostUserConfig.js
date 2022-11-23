import axios from "axios";

const url = "http://localhost/intellifinance/api/PostUserConfig.php"

export const postUserConfig  = async (userID, newName) => {

    const res = await axios.post(url, {
        data:{
            id_user: userID,
            new_name: newName,
        },
        headres:{
            "content-Type": "application/json"
        }
    })
    const userData = res.data;
    return (userData);
}