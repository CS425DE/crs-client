import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import DiscountService from "../../API/DiscountService";
import MyButton from "../../components/UI/button/MyButton";

const DiscountsList = () => {
  const [discounts, setDiscounts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const discounts = await DiscountService.getAll();
      setDiscounts(discounts.data);
    };
    fetchData();
  }, []);

  function handleEdit(id) {
    navigate(`/discounts/${id}`);
  }

  async function handleDelete(id) {
    await DiscountService.deletById(id);
    navigate("/discounts");
  }

  return (
    <div className="content1">
      <div>
        <h1>Discounts</h1>
        <Link to="/discounts/new">
          <MyButton>Create New Discount</MyButton>
        </Link>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Code</th>
            <th>Description</th>
            <th>Discount Percentage</th>
            <th>Vehicle Make</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {discounts.map((discount, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{discount.title}</td>
              <td>{discount.code}</td>
              <td>{discount.description}</td>
              <td>{discount.percentage}%</td>
              <td>{discount.vehicleMake}</td>
              <td>
                <MyButton onClick={() => handleEdit(discount.discountId)}>
                  Edit
                </MyButton>
                <MyButton onClick={() => handleDelete(discount.discountId)}>
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

export default DiscountsList;
