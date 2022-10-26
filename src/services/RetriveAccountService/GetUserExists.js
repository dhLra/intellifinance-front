import axios from "axios";

const url = "http://localhost/intellifinance/api/GetRetriveAccount.php"

export const getUserExistis = async (email) => {

    const res = await axios.post(url, {
        data: {
            email: email
        },
        headres: {
            "content-Type": "application/json"
        }
    })
    localStorage.setItem('u', JSON.stringify(res.data.email))
    const userData = res.data;
    return (userData);
}