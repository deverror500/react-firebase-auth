import React, { useState, useEffect } from "react";
import { onAuthStateChanged, sendEmailVerification } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import Header from "../../components/home/Header";
import { Button, Spinner, Card, Toast, ToastContainer } from "react-bootstrap";
import LoginPage from "../auth/LoginPage";

const Home = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, async (u) => {
      if (u) {
        setUser(u);
      } else {
        setUser(null);
        navigate("/login", { replace: true });
      }
    });

    return () => {
      listen();
    };
  }, []);

  return (
    <>
      {user && (
        <>
          <div className="text-center mt-5">
            <h1>Login Success</h1>
          </div>
        </>
      )}
    </>
  );
};

export default Home;
