import { Outlet } from "react-router-dom";
import './Header.css'
import Home from "../Home/Home";
import Footer from "../Footer/Footer";

const Header = () => {
  return (
    <div>
      <Home></Home>
      <Outlet></Outlet>
      <Footer></Footer>
      
    </div>
  );
};

export default Header;
