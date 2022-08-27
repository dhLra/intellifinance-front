import axios from "axios";

const url = "http://localhost/intellifinance/api/PostAddFixedExpend.php"

export const addFixedExpense  = async (userID, factor, category, amount, expendNumber, monthStart, monthEnd) => {

    const res = await axios.post(url, {
        data:{
            id_user: userID,
            factor: factor,
            category: category,
            amount: amount,
            expend_number:expendNumber,
            month_start: monthStart,
            month_end: monthEnd
        },
        headres:{
            "content-Type": "application/json"
        }
    })
    const status = res.data;
    console.log(status)
}