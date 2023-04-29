import { NavDropdown, Navbar, Container, Nav, Image } from "react-bootstrap";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import { BoxArrowLeft, Hypnotize, PersonCircle } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    setName(localStorage?.getItem("Name"));
  }, []);

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="white" className="">
        <Container>
          <Navbar.Brand href="/" className="">
            <Hypnotize className="mb-1 me-2" size={20} color="#4285F4" />
            <span>React App Name</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="mx-2" href="#features">
                Features
              </Nav.Link>
              <Nav.Link className="mx-2" href="#deets">
                About Us
              </Nav.Link>
              <Nav.Link className="mx-2" href="#memes">
                Contact
              </Nav.Link>
              {name && (
                <Nav.Link className="mx-2" href="/myProfile">
                  My Profile
                </Nav.Link>
              )}
            </Nav>
            {/* <Nav>
              <NavDropdown
                title="My Profile"
                drop={"down-centered"}
                align={"end"}
                id="collasible-nav-dropdown"
              >
                <NavDropdown.ItemText style={{ width: "25vw" }}>
                  <div className="d-flex align-items-center">
                    <PersonCircle
                      size={50}
                      className="	d-lg-none d-xl-block"
                      color="silver"
                    />

                    <div className="ms-xl-2">
                      <h6 className="text-truncate text-uppercase mb-0">
                        {name}
                      </h6>
                      <p className="text-secondary text-truncate mb-0">
                        {email}
                      </p>
                    </div>
                  </div>
                </NavDropdown.ItemText>

                <NavDropdown.Divider />
                <NavDropdown.Item
                  className="text-danger"
                  onClick={handleSignOut}
                >
                  <>
                    <BoxArrowLeft size={20} className="ms-3 me-4" />
                    <span>Sign out</span>
                  </>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
