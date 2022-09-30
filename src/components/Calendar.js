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

    const fullAmount = (date) => {

            var amount = 0
            var itemAmount = 0
            calendarData.filter(item => item.expense_date === date)
            .map((item) => {
                amount = parseInt(amount, 10)
                itemAmount = parseInt(item.amount, 10)
                return amount = amount + itemAmount
            })
            return amount

    }

   const allEvents = () => {
        let events = calendarData.map( (item) => {
           return {title:item.amount, date:item.expense_date}
        })
        console.log(events)
        return events
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
                        weekends={true}
                        events={allEvents()}
                        dateClick={handleShow} />

                    <Modal show={show} onHide={handleClose} size="lg">
                        <Modal.Header closeButton>
                            <Modal.Title>Relatório de Gastos</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <h5>Total Gasto: R$ {fullAmount(date)}</h5>
                            <hr></hr>
                            {calendarData.filter(item => item.expense_date === date).map((item) => {
                                return (<>
                                    <div className="row">
                                        <div className="col">
                                            <div className="mb-3">
                                                <label htmlFor="exampleFormControlInput1" className="form-label">Local do Gasto</label>
                                                <input type="text" class="form-control" disabled value={item.establishment} />
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div className="mb-3">
                                                <label htmlFor="exampleFormControlInput1" className="form-label">Data (AA-MM-DD)</label>
                                                <input type="text" class="form-control" disabled value={item.expense_date} />
                                            </div>
                                        </div>

                                        <div className="col-3">
                                            <div className="mb-3">
                                                <label htmlFor="exampleFormControlInput1" className="form-label">Valor R$</label>
                                                <input type="text" class="form-control" disabled value={item.amount} />
                                            </div>
                                        </div>
                                    </div>
                                </>)
                            })}
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