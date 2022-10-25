import axios from "axios";

const url = "http://localhost/intellifinance/api/PostOneOffExpense.php"

export const addOneOffExpense  = async (userID, street, number, district, city, date, establishment, amount, category ) => {

    const res = await axios.post(url, {
        data:{
            id_user: userID,
            street: street,
            number: number,
            district: district,
            city: city,
            date: date,
            establishment: establishment,
            amount: amount,
            category: category
        },
        headres:{
            "Content-Type": "application/json"
        }
    })
    const status = res.data;
    console.log(status)
}