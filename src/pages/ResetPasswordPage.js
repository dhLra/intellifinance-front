import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { getResetPassword } from "../services/ResetPassword/ResetPasswordService";

import '../style/css/login.css';

const LoginPage = () => {

    const { register, handleSubmit } = useForm();
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const json = localStorage.getItem('u');

    const onSubmit = async (e) => {
        if (e.s1 !== e.s2 || e.s1 === '' || e.s2 === '') {
            setError('As duas senhas não são iguais')
        } else {
            const newEmail = json.replace(/"/g, '');
            const res = await getResetPassword(newEmail, e.s1)
            if (res === 200) {
                navigate('/login')
            } else {
                setError('Algo aconteceu, por favor tente mais tarde')
            }
        }
    }

    return (
        <>
            <div className="container vh-100 d-flex justify-content-center align-items-center">
                <div className="row row-retrive-account">
                    <div className="d-flex flex-column justify-content-center">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-5 row justify-content-center align-items-center text-start ">
                                <div className="mt-5 align-items-center justify-content-center text-center">
                                    <h4>Redefina sua senha</h4>
                                </div>
                                <hr></hr>
                                <label className="reset-label">Digite sua nova senha:</label>
                                <div className="col-sm-10 mt-2">
                                    <input type="password" className="form-control" {...register("s1")} />
                                </div>
                                <label className="reset-label mt-2">Digite novamente:</label>
                                <div className="col-sm-10 mt-2">
                                    <input type="password" className="form-control" {...register("s2")} />
                                </div>

                                <div className="text-center d-flex justify-content-center align-items-center">
                                    <label style={{ color: 'red', fontSize: '14px' }}>{error}</label>
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <hr></hr>
                                <div className="col-sm text-center">
                                    <button type="submit" className="btn btn-primary">Ir !</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginPage;
