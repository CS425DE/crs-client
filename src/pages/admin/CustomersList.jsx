import { useEffect, useState } from "react";
import CustomerService from "../../API/CustomerService";
import MyButton from "../../components/UI/button/MyButton";


const CustomersList = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const customers = await CustomerService.getAll();
      setCustomers(customers.data);
    };
    fetchData();
  }, []);

  return (
    <div className="content1">
      <h1>Customers</h1>
      <table className="table table-striped">
        <thead>
          <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Contact Phone</th>
              <th>Driver License</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={index}>
                <td>{customer.customerId}</td>
                <td>{customer.firstName} {customer.lastName}</td>
                <td>{customer.email}</td>
                <td>{customer.phone}</td>
                <td>{customer.driverLicense}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CustomersList;