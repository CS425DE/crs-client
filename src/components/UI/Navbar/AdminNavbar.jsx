import React, {useContext} from 'react';
import {Link, useNavigate} from "react-router-dom";
import MyButton from "../button/MyButton";
import {AuthContext} from "../../../context";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
const AdminNavbar = () => {
    const {setIsAuth, setIsAdmin} = useContext(AuthContext);
    const navigate = useNavigate();

    const logout = () => {
        setIsAuth(false);
        setIsAdmin(false);
        localStorage.removeItem('auth')
        localStorage.removeItem('admin')
        localStorage.clear();
        navigate('/login');
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
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <div>
             
              <MyButton onClick={logout}>Logout</MyButton>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Sidebar >
    <Menu>
      <MenuItem component={<Link to="/" />}> Home </MenuItem>
      <MenuItem component={<Link to="/vehicles" />} > Vehicles </MenuItem>
      <MenuItem component={<Link to="/customers" />}>Customers </MenuItem>
      <MenuItem component={<Link to="/discounts" />}> Discounts</MenuItem>
      <MenuItem component={<Link to="/reports" />}> Reports</MenuItem>
    </Menu>
  </Sidebar>
  </>
    );
};

export default AdminNavbar;
