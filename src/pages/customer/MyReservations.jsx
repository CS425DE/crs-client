import { useState, useEffect } from 'react';
import MyButton from "../../components/UI/button/MyButton";
import {useNavigate} from "react-router";
import ReservationService from '../../API/ReservationService';


const MyReservations = () => {
    const [reservations, setReservations] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const reservations = await ReservationService.getAllByCustomerId(localStorage.getItem("id"));
            setReservations(reservations.data);
        };
        fetchData();
    }, []);

    function handleEdit(reservationId) {
        navigate(`/reservations/${reservationId}`);
    }

    function handleDelete() {
        console.log("delete")
    }

    function handlePayment() {
        console.log("payment")
    }

    return (
        <div className="content">
            <h1>My Reservations</h1>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>Reservation number</th>
                    <th>Start date</th>
                    <th>Return date</th>
                    <th>Rental charge</th>
                    <th>Insurance charge</th>
                    <th>Status</th>
                    <th>Vehicle</th>
                    <th>Created date</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {reservations.map((res, index) => (
                    <tr key={index}>
                        <td>{res.id}</td>
                        <td>{res.startDate}</td>
                        <td>{res.returnDate}</td>
                        <td>{res.rentalCharge}</td>
                        <td>{res.insuranceCharge}</td>
                        <td>{res.status}</td>
                        <td>{res.vehicle.make}</td>
                        <td>{res.createdAt}</td>
                        <td>
                            <MyButton onClick={() => handleEdit(res.id)}>Edit</MyButton>
                           {res.status === 'COMPLETED' ? <MyButton onClick={handleDelete}>Delete</MyButton> : null } 
                           {res.status === 'PENDING_PAYMENT' ? <MyButton onClick={handlePayment}>Pay</MyButton> : null } 
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyReservations;