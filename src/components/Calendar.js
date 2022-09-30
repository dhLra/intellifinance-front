import React, { useEffect, useState } from "react";

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import { getUserLocalStorage } from "../services/LoginService";
import { getCalendarData } from "../services/GetCalendarData";

import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick

const Calendar = () => {

    const userData = getUserLocalStorage()
    const [calendarData, setCalendarData] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    const [show, setShow] = useState(false);
    const [date, setDate] = useState()

    const handleClose = () => setShow(false);
    const handleShow = (arg) => {
        setShow(true);
        setDate(arg.dateStr)
    }

    useEffect(() => {
        getCalendarData(userData.token).then((res) => {
            setCalendarData(res)
            setIsLoaded(true)
        })
    }, [])


    const render = () => {
        if (isLoaded) {
            return (
                <>
                    <FullCalendar
                        plugins={[dayGridPlugin, interactionPlugin]}
                        initialView="dayGridMonth"
                        weekends={false}
                        events= {[ {title: calendarData[0].amount, date: calendarData[0].expense_date} ]}
                        dateClick={handleShow} />

                    <Modal show={show} onHide={handleClose} size="lg">
                        <Modal.Header closeButton>
                            <Modal.Title>Relatório de Gastos</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <h5>Total Gasto: R$ 000</h5>
                            <hr></hr>
                            <div className="row">
                                <div className="col">
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Local do Gasto</label>
                                        <input type="text" class="form-control" disabled />
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Data (AA-MM-DD)</label>
                                        <input type="text" class="form-control" disabled value={date} />
                                    </div>
                                </div>

                                <div className="col-3">
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Valor R$</label>
                                        <input type="text" class="form-control" disabled />
                                    </div>
                                </div>
                            </div>

                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={handleClose}>
                                Fechar
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </>
            )
        } else {
            return (
                <>
                    <div className="container flex-column justify-content-center vh-100">
                        <div className="spinner-border text-primary align-self-center justify-self-center" role="status">
                            <span className="visually-hidden">Loading...</span>
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


export default Calendar;