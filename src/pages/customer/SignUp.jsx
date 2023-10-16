import React, { useState } from "react";
import MyInput from "../../components/UI/input/MyInput";
import MyButton from "../../components/UI/button/MyButton";
import { useNavigate } from "react-router";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import fordImg from "../../images/ford.jpg";
import teslaImg from "../../images/tesla.jpg";
import lamImg from "../../images/lam.jpg";
import Carousel from "react-bootstrap/Carousel";
import CustomerService from "../../API/CustomerService";
const SignUp = () => {
  const navigate = useNavigate();
  const [customer, setCustomer] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const  signUp = async (event) => {
    console.log(customer);
    event.preventDefault();
    //let response =  await CustomerService.create(customer);
   
    try {
        let response = await CustomerService.create(customer);
        // Handle the successful response here
        console.log('Successfully created a customer:', response.data);
      } catch (error) {
        // Handle errors here
        console.error('Error creating a customer:', error.message);
        alert("Error Creating");
    }
  };

  function handleInputChange(e) {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  }

  return (
    <>
      <Navbar
        expand="lg"
        className="bg-body-tertiary"
        bg="dark"
        data-bs-theme="dark"
      >
        <Container fluid>
          <Navbar.Brand href="#">CRS</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
        </Container>
      </Navbar>

      <div id="signUpBody">
      <div class="signUpchild" id="signUpDetail">
      <section class="signup-content">
            <h1>Welcome to CRS Car Rental</h1>
            <p>Join the CRS Car Rental community and start your journey to convenient and flexible car rentals. Signing up is quick and easy! Once you become a member, you'll gain access to a wide range of vehicles, including sedans, SUVs, luxury cars, and more.</p>
            <h2>Why Join CRS Car Rental?</h2>
            <ul>
                <li>Hassle-Free Booking: Say goodbye to the time-consuming and complicated rental processes. With CRS Car Rental, you can reserve a car with just a few clicks. Our intuitive platform makes booking a breeze, allowing you to choose from a wide range of vehicles that meet your specific needs.</li>
                <li>Affordable Rates: We understand the importance of finding the best deals, and that's why we offer competitive pricing and flexible rental options. No matter your budget or travel requirements, we have options that suit you. Say goodbye to overpriced rentals and hello to cost-effective solutions</li>
                <li>Diverse Fleet: Variety is the spice of life, and our extensive fleet is a testament to that. Whether you need a sleek sedan for business meetings, a spacious SUV for family road trips, or a luxurious car for a special event, we've got you covered. Our vehicles are well-maintained and ready to enhance your travel experience.</li>
                <li>Membership Perks: As a valued member of CRS Car Rental, you'll be entitled to exclusive offers, discounts, and rewards. We believe in giving back to our community, and our membership perks are our way of saying thank you for choosing us. With each rental, you'll accumulate benefits that can enhance your future journeys.</li>
            </ul>
            <h2>Sign Up Today</h2>
            <p>Complete the registration form below to become a part of the CRS Car Rental family. It's the first step towards unlocking a world of travel possibilities. We look forward to serving you and making your car rental experience a breeze!</p>
            <a href="/login">Already have an account? Log In</a>
        </section>
        </div>
        
        <div class="signUpchild">
          <div>
            <h1>SignUp Today</h1>
            <form onSubmit={signUp}>
              <label htmlFor="firstName">First Name:</label>
              <MyInput
                type="text"
                placeholder=" Firstname"
                name="firstName"
                value={customer.firstName}
                onChange={handleInputChange}
              />
              <br />
              <label htmlFor="lastName">Last Name:</label>
              <MyInput
                type="text"
                placeholder=" Lastname"
                name="lastName"
                value={customer.lastName}
                onChange={handleInputChange}
              />
              <br />
              <label htmlFor="email">Email:</label>
              <MyInput
                type="email"
                placeholder="Email"
                name="email"
                value={customer.email}
                onChange={handleInputChange}
              />
              <br />
              <label htmlFor="password">Password:</label>
              <MyInput
                type="Password"
                placeholder="Password"
                name="password"
                value={customer.password}
                onChange={handleInputChange}
              />
              <br />
              <MyButton style={{marginTop:"20px"}}>SignUp</MyButton>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
