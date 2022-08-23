import axios from "axios";

export function setuserLocalStorage(user) {
    localStorage.setItem('u', JSON.stringify(user));
}

export function getUserLocalStorage() {
    const json = localStorage.getItem('u');

    if (!json) {
        return null;
    }
    const user = JSON.parse(json);
    return user;
}

const url = "http://localhost/intellifinance/api/Login.php";

export const LoginRequest = async (email, pass) => {

        const res = await axios.post(url, {
            data: {
                email: email,
                pass: pass
            },
            headres: {
                "content-Type": "application/json"
            }
        })
        const userData = res.data;
        console.log(userData)
        return userData;

}
