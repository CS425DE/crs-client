import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import VehicleService from "../../API/VehicleService";
import MyButton from "../../components/UI/button/MyButton";

const VehiclesList = () => {
  const [vehicles, setVehicles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const vehicles = await VehicleService.getAll();
      setVehicles(vehicles.data);
    };
    fetchData();
  }, []);

  function handleEdit(id) {
    navigate(`/vehicles/${id}`);
  }

  async function handleDelete(id) {
    await VehicleService.deletById(id);
  }

  return (
    <div className="content1">
      <div>
        <h1>Vehicles</h1>
        <Link to="/vehicles/new">
          <MyButton>Create New Vehicle</MyButton>
        </Link>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Make</th>
            <th>Model</th>
            <th>Year</th>
            <th>Color</th>
            <th>Number of seats</th>
            <th>Fuel type</th>
            <th>Price</th>
            <th>Transmission</th>
            <th>Plate number</th>
            <th>Availability</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((vehicle, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{vehicle.make}</td>
              <td>{vehicle.model}</td>
              <td>{vehicle.year}</td>
              <td>{vehicle.color}</td>
              <td>{vehicle.numberOfSeats}</td>
              <td>{vehicle.fuelType}</td>
              <td>{vehicle.price}</td>
              <td>{vehicle.transmission}</td>
              <td>{vehicle.plateNumber}</td>
              <td>{vehicle.availability ? "Available" : "Not Available"}</td>
              <td>
                <MyButton onClick={() => handleEdit(vehicle.vehicleId)}>
                  Edit
                </MyButton>
                <MyButton onClick={() => handleDelete(vehicle.vehicleId)}>
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

export default VehiclesList;
