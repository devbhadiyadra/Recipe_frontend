import React from 'react';
import ReactDOM from 'react-dom/client';
import Signup from './components/signup'
import Navbar from './components/navbar'
// import Signin from './components/Signin'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>    <Navbar/>
    <Signup/>
    {/* <Signin/> */}
    </>

);

