import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBillTransfer, faMoneyBill, faMoneyBillWave, faBurger, faCar, faCartShopping, faBriefcaseMedical, faGamepad } from "@fortawesome/free-solid-svg-icons";

import Map from "../components/Map";
import ExpenseCategory from "../components/ExpenseCategory";
import Calendar from "../components/Calendar";
import { getUserLocalStorage } from "../services/LoginService/LoginService";

import '../style/css/home.css';
import { getUserDataBalance } from "../services/UserDataService/GetUserDataBalance";

const HomePage = () => {

    useEffect(() => {
        getUserDataBalance(userData.token).then((res) => {
            setUserDataBalance(res);
        })
    }, [])


    const userData = getUserLocalStorage()
    const [userDataBalance, setUserDataBalance] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate();

    const FristLogin = (isFristLogin) => {
        if (isFristLogin === '1') {
            navigate('/frist-login')
        } else {
            setIsLoading(false)
        }
    }


    const render = () => {
        if (isLoading) {
            return (<>
                <div className="container vh-100 justify-content-center align-items-center d-flex">
                    <div className="spinner-border text-primary" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
                {FristLogin(userData.is_frist_login)}
            </>)
        } else {
            return (
                <div className="vh-100 home-container-fixo mb-5">
                    <div className="container home-container-rolavel mb-5">
                        <h1 className='mt-3 mb-5'>Olá, {userData.name}</h1>
                        <div className="row mt-3 d-flex flex-row text-center ">
                            <div className="col col-statics col-home">
                                <div className="row">
                                    <div className="col-2 ms-1 mt-1 mb-1 col-icon-green d-flex align-items-center justify-content-center">
                                        <FontAwesomeIcon icon={faMoneyBill} transform="grow-10" />
                                    </div>
                                    <div className="col">
                                        <h4 className="m-0 p-0">Saldo Atual</h4>
                                        <hr className="m-0 mb-2 p-0"></hr>
                                        <h5>R$ {userDataBalance.current_amount}</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-statics col-home me-2 ms-2">
                                <div className="row">
                                    <div className="col-2 ms-1 mt-1 mb-1 col-icon-red d-flex align-items-center justify-content-center">
                                        <FontAwesomeIcon icon={faMoneyBillWave} transform="grow-10" />
                                    </div>
                                    <div className="col">
                                        <h4 className="m-0 p-0">Despesas</h4>
                                        <hr className="m-0 mb-2 p-0"></hr>
                                        <h5>R$ {userDataBalance.expense}</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-statics col-home">
                                <div className="row">
                                    <div className="col-2 ms-1 mt-1 mb-1 col-icon-blue d-flex align-items-center justify-content-center">
                                        <FontAwesomeIcon icon={faMoneyBillTransfer} transform="grow-10" />
                                    </div>
                                    <div className="col">
                                        <h4 className="m-0 p-0">Diferença</h4>
                                        <hr className="m-0 mb-2 p-0"></hr>
                                        <h5>R$ {userDataBalance.diference}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row d-flex text-center">
                            <div className="col pb-2 pt-2 col-home mt-4 ms-1 col-calendar">
                                <h4>Lugares onde você usou até agora</h4>
                                <p>Veja os lugares onde você tem mais gastado.</p>
                                <Map />
                            </div>
                            <div className="col flex-colmun">
                                <div className="col p-2 col-home mt-4 me-1 col-grafics align-self-center justify-self-center">
                                    <h4>Como você usou até agora</h4>
                                    <ExpenseCategory icon={faBurger} type={0} />
                                    <ExpenseCategory icon={faCar} type={1} />
                                    <ExpenseCategory icon={faBriefcaseMedical} type={2} />
                                    <ExpenseCategory icon={faGamepad} type={3} />
                                    <ExpenseCategory icon={faCartShopping} type={4} />
                                </div>
                                <div className="col p-2 col-home mt-4 me-1 col-grafics align-self-center justify-self-center">
                                    <h4>Escolha a data para filtrar</h4>
                                    <p>Escolha uma data para filtrar o gráfico ao lado.</p>
                                    <Calendar />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }

    return (
        <>
            {render()}
        </>
    )
}

export default HomePage;