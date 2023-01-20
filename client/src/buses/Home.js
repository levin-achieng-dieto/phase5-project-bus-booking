
import { Link } from "react-router-dom";

const Home = () => {
 

  return (
    <section className="box">
      <h2 style={{ fontSize: "2rem" }}>Keep Track Of Your Favorite Books</h2>
      <p>
        Organize Your Books Using Their Categories.
      </p>
      
    
      <div style={{ margin: "1rem 0" }}>
        <Link style={{color: "red"}} className="button" to="/">
          View Buses
        </Link>
      </div>
    </section>
  );
};

export default Home;