import React, { useEffect, useState } from "react";
import Header from "../../components/home/Header";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { Person, PersonCircle } from "react-bootstrap-icons";

const UserProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [imgurl, setImgUrl] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setName(localStorage?.getItem("Name"));
    setEmail(localStorage?.getItem("Email"));
    setImgUrl(localStorage?.getItem("ImgUrl"));
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign out");
        localStorage.clear();
        navigate("/login", { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <section class="h-100 gradient-custom-2">
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col col-lg-9 col-xl-7">
              <div class="card">
                <div
                  class="rounded-top text-white d-flex flex-row"
                  style={{ backgroundColor: "#000", height: "200px" }}
                >
                  <div
                    class="ms-4 mt-5 d-flex flex-column"
                    style={{ width: "150px" }}
                  >
                    <img
                      src="data:image/jpeg;base64,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"
                      alt="Generic placeholder"
                      class="img-fluid img-thumbnail mt-4 mb-2"
                      style={{ width: "150px", height: "150px", zIndex: 1 }}
                    />
                    {/* {imgurl ? (
                      <img
                        src={imgurl}
                        alt="Generic placeholder"
                        class="img-fluid img-thumbnail mt-4 mb-2"
                        style={{ width: "150px", zIndex: 1 }}
                      />
                    ) : (
                      <PersonCircle
                        size={150}
                        style={{ zIndex: 1 }}
                        color="#a35eb9"
                      />
                    )} */}
                  </div>
                  <div class="ms-3" style={{ marginTop: "130px" }}>
                    <h5>{name}</h5>
                    <p>{email}</p>
                  </div>
                </div>

                <div class="d-flex justify-content-end text-center p-4">
                  {/* <button
                    type="button"
                    class="btn btn-outline-dark me-2 "
                    data-mdb-ripple-color="dark"
                  >
                    Edit profile
                  </button> */}

                  <button
                    type="button"
                    class="btn btn-outline-danger "
                    data-mdb-ripple-color="dark"
                    onClick={handleSignOut}
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserProfile;
