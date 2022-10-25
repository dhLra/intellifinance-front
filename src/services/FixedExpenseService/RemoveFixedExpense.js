import axios from "axios";

const url = "http://localhost/intellifinance/api/PostRemoveFixedExpense.php"

export const removeFixedExpense  = async (userID, ExpendID) => {

    const res = await axios.post(url, {
        data:{
            id_user: userID,
            id_expend: ExpendID,
        },
        headres:{
            "content-Type": "application/json"
        }
    })
    const status = res.data;
    console.log(status)
}