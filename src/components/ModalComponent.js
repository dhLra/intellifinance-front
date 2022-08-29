import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from "react-bootstrap";
import { addBalance } from "../services/AddBalanceService";
import { removeBalance } from "../services/RemoveBalanceService";
import { addFixedExpense } from "../services/AddFixedExpenseService";
import { getUserLocalStorage } from "../services/LoginService";

import { useForm } from "react-hook-form";
import { getModalData } from "../services/GetModalData";


const ModalComponent = (props) => {

    const { register, handleSubmit } = useForm();
    const userData = getUserLocalStorage();
    const [data, setData] = useState([]);

    useEffect(() => {
        getModalData(userData.token).then((res) => {
            setData(res)
        })
    }, [])


    const Add = (e) => {
        addBalance(userData.token, e.amount)
    }

    const Remove = (e) => {
        removeBalance(userData.token, e.amount)
    }
    const AddFixedExpense = (e) => {
        addFixedExpense(userData.token,
            e.factor,
            e.category,
            e.amount,
            e.expendNumber,
            e.monthStart,
            e.monthEnd)
    }

    const render = () => {
        if (props.type === 'addCredit') {
            return (
                <Modal
                    {...props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Adicionar Saldo
                        </Modal.Title>
                    </Modal.Header>
                    <Form onSubmit={handleSubmit(Add)}>
                        <Modal.Body>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Digite o valor a ser adicionado</label>
                                <input type="text" className="form-control"  {...register("amount")} />
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button type="submit" onClick={props.onHide}>Enviar</Button>
                            <Button onClick={props.onHide}>Cancelar</Button>
                        </Modal.Footer>
                    </Form>
                </Modal >
            )
        } else if (props.type === 'removeCredit') {
            return (
                <Modal
                    {...props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Remover Saldo
                        </Modal.Title>
                    </Modal.Header>
                    <Form onSubmit={handleSubmit(Remove)}>
                        <Modal.Body>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label mb-0">Digite o valor a ser retirado</label>
                                <p className="mt-1 "><small>Disponível: {data.current_amount} </small></p>
                                <input type="text" className="form-control" {...register("amount")} />
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button type="submit" onClick={props.onHide}>Enviar</Button>
                            <Button onClick={props.onHide}>Cancelar</Button>
                        </Modal.Footer>
                    </Form>
                </Modal>
            )
        } else if (props.type === 'addSpend') {

            return (
                <Modal
                    {...props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Adicionar Despesa Mensal
                        </Modal.Title>
                    </Modal.Header>
                    <Form onSubmit={handleSubmit(AddFixedExpense)}>
                        <Modal.Body>
                            <div className="row">

                                <div className="col">
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Fator da dispesa</label>
                                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Ex: Escola dos filhos; Microondas novo" {...register("factor")} />
                                    </div>
                                </div>

                                <div className="col-4">
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Selecionar categoria da dispesa</label>
                                        <select className="form-select form-select" aria-label=".form-select-sm example" {...register("category")}>
                                            <option selected>Selecione a categoria da dispesa</option>
                                            <option value="Alimentação">Alimentação</option>
                                            <option value="Transporte">Transporte</option>
                                            <option value="Medicamentos">Medicamentos</option>
                                            <option value="Lazer">Lazer</option>
                                            <option value="Mercado">Mercado</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Valor de uma parcela</label>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text">R$</span>
                                        <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" {...register("amount")} />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Quantidade das parcelas</label>
                                        <select className="form-select form-select" aria-label=".form-select-sm example" {...register("expendNumber")}>
                                            <option selected>Selecione a quantidade de parcelas</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                        </select>
                                    </div>
                                </div>
                            </div>


                            <div className="row">
                                <div className="col">
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Inicio das parcelas</label>
                                        <select className="form-select form-select" aria-label=".form-select-sm example" {...register("monthStart")}>
                                            <option selected>Selecione o mês de Inicio</option>
                                            <option value="1">Janeiro</option>
                                            <option value="2">Fevereiro</option>
                                            <option value="3">Março</option>
                                            <option value="4">Abril</option>
                                            <option value="5">Maio</option>
                                            <option value="6">Junho</option>
                                            <option value="7">Julho</option>
                                            <option value="8">Agosto</option>
                                            <option value="9">Setembro</option>
                                            <option value="10">Outubro</option>
                                            <option value="11">Novembro</option>
                                            <option value="12">Dezembro</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Fim das parcelas</label>
                                        <select className="form-select form-select" aria-label=".form-select-sm example" {...register("monthEnd")}>
                                            <option selected>Selecione o mês de Termino</option>
                                            <option value="1">Janeiro</option>
                                            <option value="2">Fevereiro</option>
                                            <option value="3">Março</option>
                                            <option value="4">Abril</option>
                                            <option value="5">Maio</option>
                                            <option value="6">Junho</option>
                                            <option value="7">Julho</option>
                                            <option value="8">Agosto</option>
                                            <option value="9">Setembro</option>
                                            <option value="10">Outubro</option>
                                            <option value="11">Novembro</option>
                                            <option value="12">Dezembro</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                        </Modal.Body>
                        <Modal.Footer>
                            <Button type="submit" onClick={props.onHide}>Enviar</Button>
                            <Button onClick={props.onHide}>Cancelar</Button>
                        </Modal.Footer>
                    </Form>
                </Modal>
            )

        } else if (props.type === 'removeSpend') {

            return (
                <Modal
                    {...props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Remover Despesa Mensal
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Digite o valor a ser retirado</label>
                            <input type="text" className="form-control" />
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => { console.log('Enviou') }}>Enviar</Button>
                        <Button onClick={props.onHide}>Cancelar</Button>
                    </Modal.Footer>
                </Modal>
            )

        }
    }

    return (
        render()
    )
}

export default ModalComponent