import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { getUserExistis } from "../services/RetriveAccountService/GetUserExists";

import '../style/css/login.css';

const LoginPage = () => {

    const { register, handleSubmit } = useForm();
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const onSubmit = async (e) => {
        const res = await getUserExistis(e.email)
        if (res.existis) {
            navigate('/reset-password')
        } else {
            setError('Não foi possivel encontrar o seu endereço de email')
        }
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
                            <div className="row justify-content-center align-items-center text-center ">
                                <div className="mt-2 mb-2 align-items-center justify-content-center">
                                    <h4>Vamos localizar sua conta</h4>
                                </div>
                                <hr></hr>
                                <div className="col-sm-10 ">
                                    <label>Digite o email para recuperar a senha:</label>
                                    <input type="email" className="form-control" placeholder="exemple@email.com" {...register("email")} />
                                </div>
                                <div className="row h-25">
                                <p>{error}</p>
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
