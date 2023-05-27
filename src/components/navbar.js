import React from "react";
import "./style.css";
const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {/* if any new category add in data then automatically change navbar */}
          {
            <>
              <button className="btn-group__item">home</button>
              <button className="btn-group__item">Recipe</button>
      
      <input   className="form-control mr-sm-2" id="searchbar" type="search" placeholder="Search........." aria-label="Search"/>
      <button  className="btn btn-outline-success my-2 my-sm-0" id="searchbarbtn" type="submit">Search</button>

      <button className="btn-group__item" style={{marginLeft:'150px'}}>LOGIN</button>
      <button className="btn-group__item" style={{}}>SIGN UP</button>
              </>
          }
        </div>
      </nav>
    </>
  );
};

export default Navbar;
