import React, { useContext, useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import MyInput from "../../components/UI/input/MyInput";
import MyButton from "../../components/UI/button/MyButton";
import { AuthContext } from "../../context";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CustomerService from "../../API/CustomerService";
import AdminService from "../../API/AdminService";
import fordImg from "../../images/ford.jpg";
import teslaImg from "../../images/tesla.jpg";
import lamImg from "../../images/lam.jpg";

const Login = () => {
  const { setIsAuth, setIsAdmin, setIsCustomer } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
    user: "customer",
  });
  const login =  (event) => {
    event.preventDefault();
    if (loginData.user === "admin") {
      AdminService.login(loginData).then(response =>{
        let user = response.data;
        if(user.id === null){
          alert("User Not Found")
        }else{
          setIsAdmin(true);
        localStorage.setItem("admin", "true");
        localStorage.setItem("auth", "true");
        localStorage.setItem("id", user.id);
        setIsAuth(true);
          navigate("/");
        }
      }).catch((error) => {
        console.log("Error :" + error);
      });
      
     
    } else {
      CustomerService.login(loginData).then(response =>{
        let user = response.data;
        if(user.id === null){
          alert("User Not Found")
        }else{
          setIsCustomer(true);
          localStorage.setItem("customer", "true");
          localStorage.setItem("auth", "true");
          localStorage.setItem("id", user.id);
          setIsAuth(true);
          navigate("/");
        }
      }).catch((error) => {
        console.log("Error :" + error);
      });
       
    }
    
    
    console.log(loginData);
   //
  };
  function handleInputChange(e) {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  }

  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#">CRS</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>

          <Form className="d-flex">
            <Form.Control
              placeholder="Email"
              aria-label="username"
              aria-describedby="basic-addon1"
              name="username"
            type="text" 
             onChange={handleInputChange}
            />
            <Form.Control
              type="Password"
              placeholder="Password"
              className="me-2"
              aria-label="Password"
              name="password" 
              onChange={handleInputChange}
            />
            <Form.Select
              aria-label="Role"
              name="user"
              id="user"
              onChange={handleInputChange}
              value={loginData.user}
              className=""
            >
              <option key="1" value="customer">
                customer
              </option>
              <option key="2" value="admin">
                admin
              </option>
            </Form.Select>
            <Button variant="outline-success" onClick={login}>Login</Button>
          </Form>
          <span style={{ color: "white" }}>Don't have an account </span>
          <Link to="/signup"> Sign Up</Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Carousel data-bs-theme="light"  style={{ height: "80vh" }}>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src={fordImg}
          alt="Ford"
        />
        <Carousel.Caption>
          <h5>Ford</h5>
         </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src={teslaImg}
          alt="Tesla"
        />
        <Carousel.Caption>
          <h5>Tesla</h5>
          </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src={lamImg}
          alt="Lamborgini"
        />
        <Carousel.Caption>
          <h5>Lamborgini</h5>
        
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </>
  );
};

export default Login;
