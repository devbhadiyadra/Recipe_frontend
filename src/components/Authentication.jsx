import React, { useState } from "react";
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsContent,
  MDBTabsPane,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import Navbar from "./navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Authservice from "./services/Authservice";
import axios from "axios";
import { Link ,useHistory } from "react-router-dom";

function App() {
  // sign up functions
  const [regData, setregData] = useState({
    name: "",
    email: "",
    password: ""
  });

  // get data from textbox
  const get_register_data_handler = (e, field) => {
    var value = e.target.value;
    setregData({ ...regData, [field]: value });
  };

  // store password that written in textbo
  const[repeat_pass,setrepeat_pass]=useState('')
  const get_repeat_pass_handler=(e)=>{
    setrepeat_pass(e.target.value)
  }
  const register_handler = (e) => {
    e.preventDefault();
    // console.log(repeat_pass)
   
    if (regData.pass === "" || regData.name === "" || regData.email === "") {
      toast.error("something went wrong", {
        position: toast.POSITION.BOTTOM_CENTER,
      })}

      if(regData.password!==repeat_pass){
        toast.error("please enter both same password", {
          position: toast.POSITION.BOTTOM_CENTER,
        });
     }
     else {
      toast.success("Register successfully", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
      Authservice.registeruser(regData)
        .then((res) => {
          console.log("User register successfully");
        })
        .catch((error) => {
          console.log("here" + error);
        });
    }
    console.log(regData);
  };

  // login function
  const [userDetails, setUserDetails] = useState({ email: "", password: "" });
  const get_login_data_handler = (event, field) => {
    var actualvalue = event.target.value;
    setUserDetails({ ...userDetails, [field]: actualvalue });
  };

  const login_handler = (e,history) => {
    e.preventDefault();
    // const history = useHistory();
    // console.log(userDetails);

    //authentication of to the server
    const email = userDetails.email;
    const password = userDetails.password;
    
    if (email === "") {
      toast.error("plaese enter name  ", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
      if (password === "") {
        toast.error("plaese enter password", {
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    } else {
      axios
        .post("http://localhost:8085/registration/login", { email, password })
        .then((response) => {
          console.log(response);
          if (response.data.message === "User does not exist") {
            toast.error("username is incorrect", {
              position: toast.POSITION.BOTTOM_CENTER,
            });
          } else if (response.data.isValid === false) {
            toast.error("password is incorrect", {
              position: toast.POSITION.BOTTOM_CENTER,
            });
          } else if (response.status===200) {
              toast.success("Login successfully", {
                position: toast.POSITION.BOTTOM_CENTER,
              })
              // history.push('/home');
            }
          
        })
        .catch((error) => {
          console.error(error);
        });
    }
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
            <  Link to="/authentication/login"
              onClick={() => handleJustifyClick("tab1")}
              active={justifyActive === "tab1"}
             className="btn-group__item fontcolors heading"
            >
              Login
              
            </Link>
          </MDBTabsItem>
          <MDBTabsItem>
            <Link to="/authentication/signup"  
              onClick={() => handleJustifyClick("tab2")}
              active={justifyActive === "tab2"}
              className="btn-group__item fontcolors heading"
            >
                Register
            </Link>
          </MDBTabsItem>
        </MDBTabs>
        {/* login */}
        <MDBTabsContent>
          <MDBTabsPane show={justifyActive === "tab1"}>
            <div className="text-center mb-3 subheading">
              <p>Login with:</p>
              <div
                className="d-flex justify-content-between mx-auto"
                style={{ width: "40%" }}
              ></div>
            </div>
            {/* emial */}
            <MDBInput
              wrapperClass="mb-4 mt-3 row w-75 inputbox"
              placeholder="Email address"
              id="form1"
              type="email"
              value={userDetails.email}
              onChange={(e) => get_login_data_handler(e, "email")}
            />
            {/* password */}
            <MDBInput
              wrapperClass="mb-4 mt-3 row w-75 inputbox"
              placeholder="Password"
              id="form2"
              type="password"
              value={userDetails.password}
              onChange={(e) => get_login_data_handler(e, "password")}
            />

            <button
              class="btn btn-primary mt-3 row w-75 inputbox "
              style={{ width: "700px" }}
              onClick={login_handler}
              >
              Login
            </button>
            <div className="d-flex justify-content-between mt-3" style={{marginLeft:'510px'}}>
              <Link to="/authentication/login/forgetpassword" >Forgot password?</Link>
            </div>
            <p className="text-center">
              Not a member? <Link to="/authentication/signup">Register</Link>
            </p>
          </MDBTabsPane>
          {/* sign up */}
          <MDBTabsPane show={justifyActive === "tab2"}>
            <div className="text-center mb-3 subheading">
              <p>Sign up with :</p>

              <div
                className="d-flex justify-content-between mx-auto"
                style={{ width: "40%" }}
              ></div>
            </div>
            {/* name */}
            <MDBInput
              wrapperClass="mb-4 w-75 inputbox"
              placeholder="name"
              id="form1"
              type="text"
              autoComplete="off"
              value={regData.name}
              onChange={(e) => get_register_data_handler(e, "name")}
              required
            />

            {/* email */}
            <MDBInput
              wrapperClass="mb-4  w-75 inputbox"
              placeholder="Email"
              id="form1"
              type="email"
              autoComplete="off"
              value={regData.email}
              onChange={(e) => get_register_data_handler(e, "email")}
            />
            {/* password */}
            <MDBInput
              wrapperClass="mb-4 w-75 inputbox"
              placeholder="Password"
              id="form1"
              type="password"
              autoComplete="off"
              value={regData.password}
              onChange={(e) => get_register_data_handler(e, "password")}
            />
            {/* repeat-password */}
             <MDBInput
              wrapperClass="mb-4  w-75 inputbox"
              placeholder="repeat-Password"
              id="form1"
              type="password"
              autoComplete="off"
              // value={}
              name="repeat_pass"
              onChange={get_repeat_pass_handler}
            /> 

            {/* <div className="d-flex justify-content-center mb-4">
              <MDBCheckbox
                name="flexCheck"
                id="flexCheckDefault"
                label="I have read and agree to the terms"
              />
            </div> */}

            <button
              class="btn btn-primary mt-3 w-75 inputbox"
              style={{ width: "700px" }}
              onClick={register_handler}
            >
              Sign up
            </button>
          </MDBTabsPane>
        </MDBTabsContent>
      </MDBContainer>
      <ToastContainer />
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
