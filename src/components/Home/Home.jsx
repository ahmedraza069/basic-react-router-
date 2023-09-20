import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2>My website</h2>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/services">Services</Link>
      </nav>
    </div>
  );
};

export default Home;
