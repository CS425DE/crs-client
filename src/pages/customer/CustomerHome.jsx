import { useState, useEffect } from 'react';
import DiscountService from '../../API/DiscountService';
import VehicleService from '../../API/VehicleService';


const CustomerHome = () => {
  const [vehicles, setVehicles] = useState([]);
  const [discounts, setDiscounts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const vehicles = await VehicleService.getAll();
      setVehicles(vehicles.data);
      const discounts = await DiscountService.getAll();
      setDiscounts(discounts.data);
    };
    fetchData();
  }, []);

  return (
    <div className="content">
      <h1>Available Vehicles</h1>
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
              </tr>
            </thead>
            <tbody>
              {vehicles.map((vehicle, index) => (
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{vehicle.make}</td>
                    <td>{vehicle.model}</td>
                    <td>{vehicle.year}</td>
                    <td>{vehicle.color}</td>
                    <td>{vehicle.numberOfSeats}</td>
                    <td>{vehicle.fuelType}</td>
                    <td>{vehicle.price}</td>
                    <td>{vehicle.transmission}</td>
                    <td>{vehicle.plateNumber}</td>
                    <td>{vehicle.availability ? 'Available' : 'Not Available'}</td>
                </tr>
              ))}
            </tbody>
        </table>
      <h1>Discounts</h1>
      <table className="table table-striped">
        <thead>
          <tr>
              <th>#</th>
              <th>Title</th>
              <th>Code</th>
              <th>Discount Percentage</th>
              <th>Vehicle Make</th>
          </tr>
        </thead>
        <tbody>
          {discounts.map((discount, index) => (
            <tr key={index}>
                <td>{index+1}</td>
                <td>{discount.title}</td>
                <td>{discount.code}</td>
                <td>{discount.percentage}%</td>
                <td>{discount.vehicleMake}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerHome;