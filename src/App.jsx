import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./pages/Home/Home.jsx";
// import Gallery from "../src/pages/Gallery/Gallery.jsx";

const App = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route path="/gallery" component={Gallery} /> */}
          </Switch>
        </BrowserRouter>
        
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
          theme="light" // You can make this dynamic too if needed
          toastClassName="dark:bg-gray-800 dark:text-white"
          progressClassName="bg-blue-500"
        />
      </div>
    </ThemeProvider>
  );
};

export default App;