import React, {useEffect, useState} from 'react';
import MyInput from "../../components/UI/input/MyInput";
import MyButton from "../../components/UI/button/MyButton";
import { useNavigate, useParams } from 'react-router';
import CustomerService from '../../API/CustomerService';

const CustomerInfo = () => {
    const navigate = useNavigate();
    const { customerId } = useParams();
    const [customer, setCustomer] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        driverLicense: ''
    })

    useEffect(() => {
        const fetchData = async () => {
            const customer = await CustomerService.getCustomerById(localStorage.getItem("id"));
            setCustomer(customer.data);
        }
        fetchData()
    },[])
    function handleInputChange(e) {
        setCustomer({...customer, [e.target.name]: e.target.value})
    }

    const handleSubmit = event => {
        console.log(customer)
        CustomerService.update(localStorage.getItem("id"),customer).then(
            response =>{
                alert("Successfully Updated");
            }
        );
        //navigate('/');
    }

    return (
        <div className="content">
            <h1>My Details</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name:</label>
                <MyInput type="text" placeholder="type firstname" name="firstName" value={customer.firstName} onChange={handleInputChange}/><br/>
                <label htmlFor="lastName">Last Name:</label>
                <MyInput type="text" placeholder="type lastname" name="lastName" value={customer.lastName} onChange={handleInputChange}/><br/>
                <label htmlFor="email">Email:</label>
                <MyInput type="email" placeholder="type email" name="email" value={customer.email} onChange={handleInputChange}/><br/>
                <label htmlFor="phone">Phone Number:</label>
                <MyInput type="text" placeholder="type phone" name="phone" value={customer.phone} onChange={handleInputChange}/><br/>
                <label htmlFor="password">Password:</label>
                <MyInput type="password" placeholder="type password" name="password" value={customer.password} onChange={handleInputChange}/><br/>
                <label htmlFor="driverLicenseNumber">Driver License Number:</label>
                <MyInput type="text" placeholder="type driver license number"  name="driverLicenseNumber"value={customer.driverLicense} onChange={handleInputChange}/><br/>
                <MyButton>Update</MyButton>
            </form>
        </div>
    );
};

export default CustomerInfo;
