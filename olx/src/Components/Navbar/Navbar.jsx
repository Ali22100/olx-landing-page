import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import { FaSearch, FaMapMarkerAlt, FaBars } from 'react-icons/fa';
import './Navbar.css';

function DarazNavbar() {
  return (
    <Navbar expand="lg" className="daraz-navbar" sticky="top">
      <Container fluid className="daraz-container">

        {/* Logo */}
        <Navbar.Brand href="#" className="d-flex align-items-center logo-wrapper">
          <img
            className="daraz-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/4/42/OLX_New_Logo.png"
            alt="OLX"
          />
        </Navbar.Brand>

        {/* Toggle Button for Mobile */}
        <Navbar.Toggle aria-controls="navbar-content">
          <FaBars />
        </Navbar.Toggle>

        {/* Collapsible Section */}
        <Navbar.Collapse id="navbar-content">

          {/* Motors & Property */}
          <Nav className="me-auto my-2 my-lg-0 align-items-center nav-links">
            <a href="#" className="nav-item d-flex align-items-center mx-2">
              <img
              width={500}
                src="https://modenamotorsgmbh.com/71608-thickbox_default/toyota-corolla-18l-elite-hybrid-cvt-fwd.jpg"
                alt="Motors"
                className="nav-icon-img"
              />
              <span className="ms-1">Motors</span>
            </a>
            <a href="#" className="nav-item d-flex align-items-center mx-2">
              <img
                src="https://www.livehome3d.com/assets/img/social/how-to-design-a-house.jpg"
                alt="Property"
                className="nav-icon-img"
              />
              <span className="ms-1">Property</span>
            </a>
          </Nav>
      <br></br>
          {/* Search Area */}
          <div className="d-flex flex-column flex-lg-row align-items-stretch align-items-lg-center w-100 gap-2 my-2">
            {/* Location Dropdown */}
            <Dropdown className="location-dropdown">
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                <FaMapMarkerAlt /> Pakistan
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Lahore</Dropdown.Item>
                <Dropdown.Item>Karachi</Dropdown.Item>
                <Dropdown.Item>Islamabad</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            {/* Search Bar */}
            <Form className="d-flex flex-grow-1">
              <FormControl
                type="search"
                placeholder="Find Cars, Mobile Phones and more…"
                className="search-input"
              />
              <Button className="search-btn">
                <FaSearch />
                <span className="ms-1 d-none d-md-inline">Search</span>
              </Button>
            </Form>
          </div>

          {/* User Actions */}
          <div className="d-flex flex-column flex-lg-row align-items-stretch align-items-lg-center gap-2 my-2">
            <a href="#" className="login-link text-center">Login</a>
            <Button className="sell-btn">+ SELL</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default DarazNavbar;
