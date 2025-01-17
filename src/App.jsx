import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Banner2 from "./components/Banner/Banner2";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/navbar/Navbar";
import AboutUs from "./components/About-us/AboutUs";
import Home from "./pages/Home/Home.jsx";
import Gallery from "../src/pages/Gallery/Gallery.jsx";

const App = () => {
  return (

    <>
    <ToastContainer
  position="top-right"
  autoClose={5000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="light"
/>

    <BrowserRouter>
     <Switch>

     <Route exact path="/" component={Home} />
     <Route path="/gallery" component={Gallery} />
     </Switch>
    </BrowserRouter>
    </>
   
  );
};

export default App;