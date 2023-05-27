import React, { useState} from "react";
import "./style.css";
import Navbar from '../components/navbar'
const Signup = () => {
  const [regData, setregData] = useState({
    username: "",
    email: "",
    pass: "",
    repeat_pass: "",
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
    setRegister([...Register, newrecord]);
    //All text-box record stored in regData
    console.log(regData);
  };

  return (
    <>
    <Navbar/>
      <section>
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card">
                  <div className="card-body p-5" style={{backgroundColor:'black' ,borderRadius:'20px'}}> 
                    <h2 className="text-uppercase text-center mb-5 mt-0" id="fontstyle">
                      Create an account
                    </h2>
                    <form>
                      <div className="form-outline mb-2" >
                        <input
                          type="text"
                          id="form3Example1cg"
                          className="form-control form-control-lg"
                          autoComplete="off"
                          value={regData.username}
                          name="username"
                          onChange={handler}
                        />
                        <label className="form-label" for="form3Example1cg" id="fontstyle"> 
                          Your Name
                        </label>
                      </div>

                      <div className="form-outline mb-2">
                        <input
                          type="email"
                          id="form3Example3cg"
                          className="form-control form-control-lg"
                          autoComplete="off"
                          value={regData.email}
                          name="email"
                          onChange={handler}
                        />
                        <label className="form-label" for="form3Example3cg" id="fontstyle">
                          Your Email
                        </label>
                      </div>

                      <div className="form-outline mb-2">
                        <input
                          type="password"
                          id="form3Example4cg"
                          className="form-control form-control-lg"
                          autoComplete="off"
                          value={regData.pass}
                          name="pass"
                          onChange={handler}
                        />
                        <label className="form-label" for="form3Example4cg" id="fontstyle">
                          Password
                        </label>
                      </div>

                      <div className="form-outline mb-2">
                        <input
                          type="password"
                          id="form3Example4cdg"
                          className="form-control form-control-lg"
                          autoComplete="off"
                          value={regData.repeat_pass}
                          name="repeat_pass"
                          onChange={handler}
                        />
                        <label className="form-label" id="fontstyle">
                          {/* var value=e.target.value */}
                          Repeat your password
                        </label>
                      </div>

                      <div className="form-check d-flex justify-content-centerx">
                        {/* <input
                          className="form-check-input me-2"
                          type="checkbox"
                          value=""
                          id="form2Example3cg"
                        /> */}
                        {/* <label className="form-check-label" for="form2Example3g">
                          I agree all statements in{" "}
                          <a href="#!" className="text-body">
                            <u>Terms of service</u>
                          </a>
                        </label> */}
                      </div>

                      <div className="d-flex justify-content-center mt-3">
                        <button
                          type="button"
                          onClick={register}
                          className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                        >
                          Register
                        </button>
                      </div>
  
                      <p className="text-center mt-3 mb-0 " id="fontstyle" >
                        Have already an account?{" "}
                        <a href="#!" className="fw-bold">
                          <u>Login here</u>
                        </a>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {Register.map((curElem) => {
        return (
          <div>
            <p>{curElem.username}</p>
            <p>{curElem.email}</p>
            <p>{curElem.pass}</p>
            <p>{curElem.repeat_pass}</p>
          </div>
        );
      })}
    </>
    
  );
  
};

export default Signup;
