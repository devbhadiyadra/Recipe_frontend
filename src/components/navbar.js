import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
const Navbar = () => {
  // const nav=useNavigate()
  // const navhandler=()=>{
  //   nav("/sign up")
  // }

  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {/* if any new category add in data then automatically change navbar */}
          {
            <>
              <button className="btn-group__item">
                <Link to='/home' className="fontcolors">home</Link>
                </button>
              <button className="btn-group__item"><Link to='/recipes' className="fontcolors">Recipes</Link></button>

              <input
                className="form-control mr-sm-2"
                id="searchbar"
                type="search"
                placeholder="Search........."
                aria-label="Search"
               
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0 srcbtn"
                id="searchbarbtn"
                type="submit"
              
                style={{border:'0px'}}
              >
                Search
              </button>

              <button
                className="btn-group__item"
                style={{ marginLeft: "150px" }}
              >
       
                <Link to='/authentication' className="fontcolors">LOGIN</Link>
              </button>
              {/* <button className="btn-group__item"><Link to='/signup'>Sign up</Link></button> */}
             
            </>
          }
        </div>
      </nav>
    </>
  );
};

export default Navbar;
