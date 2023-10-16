import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MyButton from "../button/MyButton";
import { AuthContext } from "../../../context";
import MyModal from "../MyModal/MyModal";
import FeedbackForm from "../../FeedbackForm";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
const CustomerNavbar = () => {
  const { setIsAuth, setIsCustomer } = useContext(AuthContext);
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();

  const logout = () => {
    setIsAuth(false);
    setIsCustomer(false);
    localStorage.removeItem("auth");
    localStorage.removeItem("customer");
    localStorage.clear();
    navigate("/login");
  };

  const createFeedback = (newFeedback) => {
    console.log(newFeedback);
    setModal(false);
  };

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
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <div>
            <MyButton onClick={() => setModal(true)}>Add Feedback</MyButton>
            <MyModal visible={modal} setVisible={setModal}>
              <FeedbackForm create={createFeedback} />
            </MyModal>
            <MyButton onClick={logout}>Logout</MyButton>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Sidebar >
  <Menu>
    <MenuItem component={<Link to="/" />}> Home </MenuItem>
    <MenuItem component={<Link to="/info" />} > My Info </MenuItem>
    <MenuItem component={<Link to="/reservations" />}> My Reservations </MenuItem>
    <MenuItem component={<Link to="/reservations/new" />}> New Reservation</MenuItem>
  </Menu>
</Sidebar>
    </>
    
  );
};

export default CustomerNavbar;
