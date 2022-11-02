import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { getUserLocalStorage } from "../services/LoginService/LoginService";
import { getCategory } from "../services/CategoryService/GetCategoryService";

const ExpenseCategory = (props) => {

    const userData = getUserLocalStorage();
    const [categoryData, setCategoryData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getCategory(userData.token).then((res) => {
            setCategoryData(res)
            setIsLoading(false)
        })
    }, [])

    const getCategoryPorcent = (category, categoryData) => {
        return(<div className="progress-bar" role="progressbar" style={{ width: `${categoryData[category]}%` }} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>)
    }
    const render = () => {
        if (isLoading) {
            return (
                <>
                    <div className="container flex-column justify-content-center">
                        <div className="spinner-border text-primary align-self-center justify-self-center" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <div className="row mb-2 align-items-center justify-content-center text-center">
                        <div className="col-1">
                            <FontAwesomeIcon icon={props.icon} />
                        </div>
                        <div className="col">
                            <div className="progress">
                               {getCategoryPorcent(props.type, categoryData)}
                            </div>
                        </div>
                    </div>
                </>
            )
        }
    }

    return (
        <>
            {render()}
        </>
    )
}

export default ExpenseCategory;