import React, { useEffect, useState } from "react";
import MyInput from "../../components/UI/input/MyInput";
import MyButton from "../../components/UI/button/MyButton";
import { useNavigate, useParams } from "react-router";
import VehicleService from "../../API/VehicleService";
import DiscountService from "../../API/DiscountService";

const DiscountDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [discount, setDiscount] = useState({
    title: "",
    code: "",
    percentage: 2023,
    vehicleId: "",
  });
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const vehicles = await VehicleService.getAll();
      setVehicles(vehicles.data);

      const discount = await DiscountService.getById(id);
      setDiscount(discount.data);
    };
    fetchData();
  }, [id]);

  async function handleSubmit() {
    await DiscountService.update(id, discount);
    navigate("/discounts");
  }

  function handleInputChange(e) {
    setDiscount({ ...discount, [e.target.name]: e.target.value });
  }

  return (
    <div className="content1">
      <h1>Discounts Details</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <MyInput
          name="title"
          type="text"
          value={discount.title}
          onChange={handleInputChange}
        />
        <br />
        <label htmlFor="code">Code:</label>
        <MyInput
          name="code"
          type="text"
          value={discount.code}
          onChange={handleInputChange}
        />
        <br />
        <label htmlFor="description">Description:</label>
        <MyInput
          name="description"
          type="text"
          value={discount.description}
          onChange={handleInputChange}
        />
        <br />
        <label htmlFor="percentage">Percentage:</label>
        <MyInput
          name="percentage"
          type="number"
          value={discount.percentage}
          onChange={handleInputChange}
        />
        <br />
        <label htmlFor="price">Vehicle:</label>
        <select
          name="vehicleId"
          onChange={handleInputChange}
          value={discount.vehicleId}
        >
          {vehicles.map((vehicle) => {
            const {
              vehicleId,
              make,
              model,
              year,
              color,
              numberOfSeats,
              fuelType,
              price,
              transmission,
            } = vehicle;
            return (
              <option key={vehicleId} value={vehicleId}>{`${make} ${model}
                        (${color}, ${year}, ${numberOfSeats}, ${fuelType}, ${price}, ${transmission})`}</option>
            );
          })}
        </select>
        <br />
        <MyButton>Update</MyButton>
      </form>
    </div>
  );
};

export default DiscountDetails;
