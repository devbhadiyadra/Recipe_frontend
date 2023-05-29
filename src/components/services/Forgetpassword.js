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
import "../style.css";
const Forgetpassword = () => {
  const [justifyActive, setJustifyActive] = useState("tab1");
  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }
    setJustifyActive(value);
  };

  // email store
  const[Email,SetEmail]=useState({email:""})
  const handler = (event, field) => {
    var actualvalue = event.target.value;
    SetEmail({ ...Email, [field]: actualvalue });
  };
  
  const emailhandler=(e)=>{
    e.preventDefault()
    const email=Email.email
    console.log(email)
    // Setemail(em)
  }

  // const displaydata=()=>{
  //   <div>hiii</div>
  // }
  return (
    <>
      <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
        <MDBTabs
          pills
          justify
          className="mb-3 d-flex flex-row justify-content-between"
        ></MDBTabs>

        <MDBTabsContent>
          <MDBTabsPane show={justifyActive === "tab1"}>
            <div className="text-center mb-3 heading">
              <p>RESET PASSWORD:</p>
              <div
                className="d-flex justify-content-between mx-auto"
                style={{ width: "40%" }}
              ></div>
            </div>
            {/* emial */}
            <div className="forget_email">
            <MDBInput
              wrapperClass="mb-4 w-75 inputbox"
              placeholder="Email address"
              id="form1"
              type="email"
              
              // value={userDetails.email}
              onChange={(e) => handler(e, "email")}
            /></div>
            
            <button class="btn btn-primary w-75 inputbox"
            // onClick={displaydata} 
            >send email</button>
            {/* password */}
            <div className="forget_otp">
            <MDBInput
              wrapperClass="mb-4 w-75 inputbox"
              placeholder="OTP"
              id="form2"
            /></div>

            <button class="btn btn-primary w-75 inputbox"
            onClick={emailhandler} style={{display:'none'}}
            >send</button>

              <div className="newpass">
              <MDBInput
              wrapperClass="mb-4 mt-5 w-75 inputbox"
              placeholder="New password"
              id="form1"
              type="email"
              
              // value={userDetails.email}
              // onChange={(e) => handler(e, "email")}
            />
              </div>
            
            <div className="repeatnewpass">
            <MDBInput
              wrapperClass="mb-4 w-75 inputbox"
              placeholder="Repeat New password"
              id="form1"
              type="email"
              
              // value={userDetails.email}
              // onChange={(e) => handler(e, "email")}
            />
            </div>
          </MDBTabsPane>
        </MDBTabsContent>
      </MDBContainer>
    </>
  );
};

export default Forgetpassword;
