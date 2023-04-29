import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";
import { Container, Col } from "react-bootstrap";
import { Google, Hypnotize } from "react-bootstrap-icons";

const LoginPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const listen = onAuthStateChanged(auth, async (u) => {
      if (u) {
        navigate("/", { replace: true });
      }
    });
    return () => {
      listen();
    };
  }, []);

  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        console.log(data.user);
        localStorage.setItem("Email", data?.user?.email);
        localStorage.setItem("Name", data?.user?.displayName);
        localStorage.setItem("ImgUrl", data?.user?.photoURL);
        navigate("/", { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Container className="loginPageContainer d-flex justify-content-center align-items-center">
        <Col xs={10} sm={8} md={6} xl={4} className=" text-center signInBox">
          <Hypnotize className="mb-3" size={80} color="#4285F4" />
          <h1 class="mb-5 fw-normal">React App Name</h1>

          <button className="w-100 btn signInBtn" onClick={handleSignIn}>
            <Google className=" me-2 mb-1" color="white" size={20} />
            <span className="text-white h5 ">Sign in with Google</span>
          </button>
          <p className="mt-5 mb-3 text-secondary">&copy; 2023</p>
        </Col>
      </Container>
    </>
  );
};

export default LoginPage;
