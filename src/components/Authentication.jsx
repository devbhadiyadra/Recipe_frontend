import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  // MDBBtn,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import Navbar from "./navbar";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Authservice from "./services/Authservice";
import axios from "axios";
// import LoginComponent  from './LoginComponent '

function App() {
  // sign up functions
  const [regData, setregData] = useState({
    name: "",
    email: "",
    password: "",

    // repeat_pass: "",
  });

  const [Register, setRegister] = useState([]);
  // console.log(regData)
  // get data from textbox
  const handler = (e) => {
    const name = e.target.name;
    var value = e.target.value;
    setregData({ ...regData, [name]: value });
    // console.log(value)
  };

  const register = (e) => {
    e.preventDefault();

    const newrecord = { ...regData, id: new Date().getTime().toString() };
    //All text-box record stored in regData
    setRegister([...Register, newrecord]);

    // for send data to the server
    Authservice.registeruser(regData)
      .then((res) => {
        console.log("User register successfully");
      })
      .catch((error) => {
        console.log("here" + error);
      });

    if (regData.pass === "" || regData.name === "" || regData.email === "") {
      toast.error("something went wrong", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      toast.success("success");
    }
    console.log(regData);
  };

  // login function

  const [userDetails, setUserDetails] = useState({ email: "", password: "" });
  const loginhandler = (event, field) => {
    var actualvalue = event.target.value;
    setUserDetails({ ...userDetails, [field]: actualvalue });
  };

  const login = (e) => {
    e.preventDefault();
    console.log(userDetails);

    //authentication of to the server
    const email = userDetails.email;
    const password = userDetails.password;
    console.log(email,password)
    axios
      .post("http://localhost:8085/registration/login", { email, password })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  // extra functions
  const [justifyActive, setJustifyActive] = useState("tab1");
  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }
    setJustifyActive(value);
  };

  return (
    <>
      <Navbar />
      {/* login and register title */}
      <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
        <MDBTabs
          pills
          justify
          className="mb-3 d-flex flex-row justify-content-between"
        >
          <MDBTabsItem>
            <MDBTabsLink
              onClick={() => handleJustifyClick("tab1")}
              active={justifyActive === "tab1"}
              style={{ color: "black" }}
            >
              Login
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink
              onClick={() => handleJustifyClick("tab2")}
              active={justifyActive === "tab2"}
            >
              <Link to="/signup" className="fontcolors">
                Register
              </Link>
            </MDBTabsLink>
          </MDBTabsItem>
        </MDBTabs>
        {/* login */}
        <MDBTabsContent>
          <MDBTabsPane show={justifyActive === "tab1"}>
            <div className="text-center mb-3">
              <p>Sign in with:</p>
              <div
                className="d-flex justify-content-between mx-auto"
                style={{ width: "40%" }}
              ></div>

              <p className="text-center mt-3">or:</p>
            </div>
            {/* emial */}
            <MDBInput
              wrapperClass="mb-4"
              label="Email address"
              id="form1"
              type="email"
              value={userDetails.email}
              onChange={(e) => loginhandler(e, "email")}
            />
            {/* password */}
            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              id="form2"
              type="password"
              value={userDetails.password}
              onChange={(e) => loginhandler(e, "password")}
            />

            <div className="d-flex justify-content-between mx-4 mb-4">
              <MDBCheckbox
                name="flexCheck"
                value=""
                id="flexCheckDefault"
                label="Remember me"
              />
              <a href="!#">Forgot password?</a>
            </div>

            <button
              class="btn btn-primary"
              style={{ width: "700px" }}
              onClick={login}
            >
              Sign in
            </button>
            <p className="text-center">
              Not a member? <a href="#!">Register</a>
            </p>
          </MDBTabsPane>
          {/* sign up */}
          <MDBTabsPane show={justifyActive === "tab2"}>
            <div className="text-center mb-3">
              <p>Sign up with:</p>

              <div
                className="d-flex justify-content-between mx-auto"
                style={{ width: "40%" }}
              ></div>
            </div>
            {/* name */}
            <MDBInput
              wrapperClass="mb-4"
              label="name"
              id="form1"
              type="text"
              autoComplete="off"
              value={regData.name}
              name="name"
              onChange={handler}
              required
            />

            {/* email */}
            <MDBInput
              wrapperClass="mb-4"
              label="Email"
              id="form1"
              type="email"
              autoComplete="off"
              value={regData.email}
              name="email"
              onChange={handler}
            />
            {/* password */}
            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              id="form1"
              type="password"
              autoComplete="off"
              value={regData.password}
              name="password"
              onChange={handler}
            />
            {/* repeat-password */}
            {/* <MDBInput
              wrapperClass="mb-4"
              label="repeat-Password"
              id="form1"
              type="password"
              autoComplete="off"
              value={regData.repeat_pass}
              name="repeat_pass"
              onChange={handler}
            /> */}

            <div className="d-flex justify-content-center mb-4">
              <MDBCheckbox
                name="flexCheck"
                id="flexCheckDefault"
                label="I have read and agree to the terms"
              />
            </div>

            <button
              class="btn btn-primary"
              style={{ width: "700px" }}
              onClick={register}
            >
              Sign up
            </button>
          </MDBTabsPane>
        </MDBTabsContent>
      </MDBContainer>

      {/* print on screen all filled data */}
      {/* {Register.map((curElem) => {
        return (
          <div>
            <p>{curElem.name}</p>
            <p>{curElem.email}</p>
            <p>{curElem.pass}</p>
            <p>{curElem.repeat_pass}</p>
          </div>
        );
      })} */}
    </>
  );
}

export default App;
