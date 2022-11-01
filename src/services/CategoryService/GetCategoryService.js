import axios from "axios";

const url = "http://localhost/intellifinance/api/GetCategoryData.php"

export const getCategory  = async (userID) => {

    const res = await axios.get(url, {
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