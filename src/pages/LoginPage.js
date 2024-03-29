import React, {useState} from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

import logo from "../style/img/logo.svg"
import { useAuth } from "../services/LoginService/useAuth";

import '../style/css/login.css';

const LoginPage = () => {

    const auth = useAuth()

    const { register, handleSubmit } = useForm();
    const [error, setError] = useState('')
    const navigate = useNavigate();

    const onSubmit = async (e) => {
        try {
            await auth.authenticate(e.email, e.password)
        } catch (error) {
           setError('Login ou senhas invalidos')
        }
        navigate('/home');
    }

    return (
        <>
            <div className="bg-img">
                <div className="row login-row vh-100">
                    <div className="d-flex flex-column justify-content-center vh-100">
                        <div className="text-center mb-3">
                            <img alt="logo" className="logo" src={logo} />
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-3 row ">
                                <label className="col-sm-2 col-form-label d-flex justify-content-end align-items-center"><FontAwesomeIcon icon={faUser} /></label>
                                <div className="col-sm-10">
                                    <input type="email" className="form-control" placeholder="exemple@email.com" {...register("email")} />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label className="col-sm-2 col-form-label d-flex justify-content-end align-items-center"><FontAwesomeIcon icon={faLock} /></label>
                                <div className="col-sm-10">
                                    <input type="password" className="form-control"  {...register("password")} />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <div className="col-sm text-center">
                                    <button type="submit" className="btn btn-primary"><FontAwesomeIcon icon={faArrowRightLong} /></button>
                                </div>
                            </div>

                            <div className="mb-3 row">
                                <div className="col-sm text-center">
                                    <p>{error}</p>
                                </div>
                            </div>


                            <div className="mb-3 row">
                                <div className="col-sm d-flex justify-content-center">
                                    <a href="/retrive-account">Esqueceu sua senha?</a>
                                </div>
                            </div>

                        </form>
                        <p className="align-self-center justify-self-end credits">Powered By dhLra_</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginPage;
