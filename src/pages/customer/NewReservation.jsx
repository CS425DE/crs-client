import React, {useEffect, useState} from 'react';
import MyInput from "../../components/UI/input/MyInput";
import MyButton from "../../components/UI/button/MyButton";
import {useNavigate} from "react-router";
import VehicleService from '../../API/VehicleService';

const NewReservation = () => {

    const navigate = useNavigate();

    const [reservation, setReservation] = useState({
        startDate: '',
        returnDate: '',
        vehicleId: ''
    });
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        const fetchVehicles = async () => {
            const vehicles = await VehicleService.getAvailableVehicles();
            setVehicles(vehicles.data);
        }
        fetchVehicles()
    }, []);



    function handleSubmit()  {
        // submit new reservation
        console.log(reservation);
        navigate('/my-reservations');

    }

    function handleInputChange(e) {
        setReservation({...reservation, [e.target.name]: e.target.value})
    }

    return (
        <div className="content">
            <h1>New Reservations Details</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="startDate">Choose start date:</label>
                <MyInput name="startDate" type="datetime-local" value={reservation.startDate} onChange={handleInputChange} /><br/>
                <label htmlFor="returnDate">Choose return date:</label>
                <MyInput name="returnDate" type="datetime-local" value={reservation.returnDate} onChange={handleInputChange} /><br/>
                <label htmlFor="vehicle">Choose available vehicle:</label>
                <select name="vehicleId" onChange={handleInputChange} value={reservation.vehicleId}>
                    {vehicles.map((vehicle) => {
                        const { vehicleId, make, model, year, color, numberOfSeats, fuelType, price, transmission } = vehicle;
                        return (<option key={vehicleId} value={vehicleId}>{`${make} ${model}
                        (${color}, ${year}, ${numberOfSeats}, ${fuelType}, ${price}, ${transmission})`}</option>
                    )})}
                </select><br/>
                <MyButton>Add</MyButton>
            </form>
        </div>
    );
};

export default NewReservation;
