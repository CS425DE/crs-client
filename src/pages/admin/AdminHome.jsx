import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import ReservationService from "../../API/ReservationService";
import MyButton from "../../components/UI/button/MyButton";

const AdminHome = () => {
  const [reservations, setReservations] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const reservations = await ReservationService.getAll();
      setReservations(reservations.data);
    };
    fetchData();
  }, []);

  function handleEdit(id) {
    navigate(`/reservations/${id}`);
  }

  async function handleDelete(id) {
    await ReservationService.deletById(id);
  }

  return (
    <div className="content1">
      <h1>Reservations</h1>
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
              <td>{res.reservationId}</td>
              <td>{res.startDate}</td>
              <td>{res.returnDate}</td>
              <td>{res.rentalCharge}</td>
              <td>{res.insuranceCharge}</td>
              <td>{res.status}</td>
              <td>{res.vehicle.make}</td>
              <td>{res.created_at}</td>
              <td>
                <MyButton onClick={() => handleEdit(res.reservationId)}>
                  Edit
                </MyButton>
                <MyButton onClick={() => handleDelete(res.reservationId)}>
                  Delete
                </MyButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminHome;
