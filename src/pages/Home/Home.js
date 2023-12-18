import React,{useEffect} from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    const user = localStorage.getItem("user");
  return (
    <header>
    <nav>
      <div class="logo">Dairy Vista</div>
      <div class="menu">
        <p>Home</p>
        <p>Contact</p>
        <p>Important links</p>
        <p>Products</p>
      </div>
        <div class="dropdown">
        <button class="dropbtn" href="login.html">
          Login
        </button>
        <div class="dropdown-content">
            {user? <Link to="/consumer">
                <p>Consumer</p>
                </Link> :
          <Link to="/login">
          <p>Customer</p>
          </Link>
}
          {user?
          <Link to="/stackholder">
          <p>Stakeholder</p>
          </Link>:
          <Link to="/login">
          <p>Stakeholder</p>
          </Link>
}
          {user?
          <Link to="/recycler">
          <p>Recycler</p>
          </Link>:
          <Link to="/login">
          <p>Recycler</p>
          </Link>
          }
        </div>
      </div>
    </nav>
  </header>
  )
}

export default Home
