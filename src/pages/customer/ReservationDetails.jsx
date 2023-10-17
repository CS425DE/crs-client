import React, {useEffect, useState} from 'react';
import MyInput from "../../components/UI/input/MyInput";
import MyButton from "../../components/UI/button/MyButton";
import {useNavigate, useParams} from "react-router";
import ReservationService from '../../API/ReservationService';
import VehicleService from '../../API/VehicleService';

const ReservationDetails = () => {

    const { reservationId } = useParams();
    const navigate = useNavigate();

    const [reservation, setReservation] = useState({
        startDate: '',
        returnDate: '',
        vehicleId: ''
    });
    
    const [vehicles, setVehicles] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            const reservation = await ReservationService.getById(reservationId);
            const { startDate, returnDate, vehicle } = reservation.data;
            setReservation({
                startDate: startDate,
                returnDate: returnDate,
                vehicleId: vehicle.vehicleId
            })

            const vehicles = await VehicleService.getAvailableVehicles();
            setVehicles(vehicles.data);
        }
        fetchData();

    }, [reservationId]);



    async function  handleSubmit(e)  {
        e.preventDefault();
      ReservationService.update(reservationId, reservation).then(response =>{
        
      })
        navigate('/reservations');
    }

    function handleInputChange(e) {
        setReservation({...reservation, [e.target.name]: e.target.value})
    }

    return (
        <div className="content">
            <h1>Reservations Details</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="startDate">Start date:</label>
                <MyInput name="startDate" type="datetime-local" value={reservation.startDate} onChange={handleInputChange} /><br/>
                <label htmlFor="endDate">End date:</label>
                <MyInput name="returnDate" type="datetime-local" value={reservation.returnDate} onChange={handleInputChange} /><br/>
                <label htmlFor="vehicle">Vehicle:</label><br/>
                <select name="vehicleId" onChange={handleInputChange} value={reservation.vehicleId}>
                    {vehicles.map((vehicle) => {
                        const { vehicleId, make, model, year, color, numberOfSeats, fuelType, price, transmission } = vehicle;
                        return (<option key={vehicleId} value={vehicleId}>{`${make} ${model}
                        (${color}, ${year}, ${numberOfSeats}, ${fuelType}, ${price}, ${transmission})`}</option>
                    )})}
                </select><br/>
                <MyButton>Update</MyButton>
            </form>
        </div>
    );
};

export default ReservationDetails;
