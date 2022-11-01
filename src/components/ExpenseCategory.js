import React, {useEffect, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { getUserLocalStorage } from "../services/LoginService/LoginService";
import { getCategory } from "../services/CategoryService/GetCategoryService";

const ExpenseCategory = (props) => {

    const userData = getUserLocalStorage();
    const [categoryData, setCategoryData] = useState([])

    useEffect(() => {
        getCategory(userData.token).then((res) => {
            setCategoryData(res)
        })
    }, [])

    return (
        <>
            <div className="row mb-2 align-items-center justify-content-center text-center">
                <div className="col-1">
                    <FontAwesomeIcon icon={props.icon} />
                </div>
                <div className="col">
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{ width: "86%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ExpenseCategory;