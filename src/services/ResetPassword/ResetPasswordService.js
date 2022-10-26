import axios from "axios";

const url = "http://localhost/intellifinance/api/GetResetPassword.php"

export const getResetPassword = async (email, senha) => {

    const res = await axios.post(url, {
        data: {
            email: email,
            senha: senha
        },
        headres: {
            "content-Type": "application/json"
        }
    })

    console.log(res)
    const userData = res.data;
    return (userData);
}