import axios from "axios";

const url = "http://localhost/intellifinance/api/GetCategoryData.php"

export const getCategory  = async (userID) => {

    console.log(userID)
    const res = await axios.post(url, {
        data:{
            id_user: userID,
        },
        headres:{
            "Content-Type": "application/json"
        }
    })

    console.log(res.data)
    const categoryData = res.data;
    return(categoryData);
}