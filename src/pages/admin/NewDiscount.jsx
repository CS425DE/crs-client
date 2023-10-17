import React, { useEffect, useState } from "react";
import MyInput from "../../components/UI/input/MyInput";
import MyButton from "../../components/UI/button/MyButton";
import { useNavigate } from "react-router";
import DiscountService from "../../API/DiscountService";
import VehicleService from "../../API/VehicleService";

const NewDiscount = () => {
  const navigate = useNavigate();

  const [discount, setDiscount] = useState({
    title: "",
    code: "",
    description: "",
    percentage: 2023,
    vehicleId: "",
  });
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const vehicles = await VehicleService.getAll();
      setVehicles(vehicles.data);
    };
    fetchData();
  }, []);

  async function handleSubmit() {
    await DiscountService.create(discount);
    navigate("/discounts");
  }

  function handleInputChange(e) {
    setDiscount({ ...discount, [e.target.name]: e.target.value });
  }

  return (
    <div className="content1">
      <h1>New Discount </h1>
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
        <MyButton>Create</MyButton>
      </form>
    </div>
  );
};

export default NewDiscount;
