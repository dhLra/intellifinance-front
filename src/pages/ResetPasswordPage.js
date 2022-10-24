import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import '../style/css/login.css';

const LoginPage = () => {

    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (e) => {
        navigate('/login');
        /*  try {
              
          } catch (error) {
              return <h1>Senha ou Usuarios invalidos</h1>
          }*/
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
                                    <input type="password" className="form-control" {...register("email")} />
                                </div>
                                <label className="reset-label mt-2">Digite novamente:</label>
                                <div className="col-sm-10 mt-2">
                                    <input type="password" className="form-control" {...register("email")} />
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
