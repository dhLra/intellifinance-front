import axios from "axios";

const url = "http://localhost/intellifinance/api/GetCalendarData.php"

export const getCalendarData  = async (userID) => {

    const res = await axios.post(url, {
        data:{
            id_user: userID,
        },
        headres:{
            "Content-Type": "application/json"
        }
    })
    const calendarData = res.data;
    return(calendarData);
}