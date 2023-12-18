import React from 'react';
import './Consumer.css';
import CountUp from 'react-countup';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Consumer = () => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user"));
  return (
    <>
<button className="logoutButton" onClick={() => {
    signOut(auth);
    localStorage.removeItem("user");
    navigate("/");
}}>
    Logout
</button>
<div>
    <p>
        Welcome {user.email}
    </p>
</div>
    <div id="container1" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="3000">

        <div className="product-details">

            <h1>RecyClene</h1>
            <p className="information">"Revolutionizing the waste management system!"
            </p>

            <div className="control">

                <Link to ="/shop">
                <p>
                    <button className="btn" id="container1button">
                        <span className="buy">Shop</span>
                    </button>
                </p>
                </Link>

            </div>

        </div>


        <div className="product-image">

        </div>



    </div>


    <div id="container3" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="2000">

        <div className="product-details">

            <h1>Hygiene</h1>

            <p className="information">"Your Path to a Fresh and Flourishing Lifestyle!"
            </p>

            <div className="control">

                <a href="hygiene.html">
                    <Link to ="/hygiene">
                    <button className="btn">
                        <span className="buy">Check</span>
                    </button>
                    </Link>
                </a>

            </div>

        </div>


        <div className="product-image1">

        </div>


    </div>


    <div id="container2" data-aos="fade-right" data-aos-duration="3000">

        <div className="product-details">

            <h1>Cash Your Trash</h1>

            <p className="information">"Turning Trash to Cash:Turning Waste into Wealth!"
            </p>

            <div className="control">

                <a href="sell.html">
                    <button className="btn">

                        <span className="buy">Sell</span>
                    </button>
                </a>

            </div>

        </div>


        <div className="product-image2">

        </div>


    </div>

    {/* <hr style="
        border: dotted #ff5f9e 6px;
        border-bottom: none;
        width: 4%;
        margin-right: auto;
        margin-left: auto;
        margin-top: 60px;
    "> */}


    <section style={{backgroundColor: "#ECEDF6"}} id="sectionofcounter">
        <div className="countinganimation" data-aos="fade-down" data-aos-duration="1000" data-aos-easing="linear"
            style={{marginTop: "40px  "}}>
            <header className="header456">
                <h1 className="ml3">Our Users</h1>
            </header>
            <section className="counters">
                <div className="container1">
                    <div>
                        <i className="fab fa-youtube fa-4x"></i>
                        <div className="counter" data-target="00">
                            <CountUp end={100} duration={5} enableScrollSpy/>
                        </div>
                        <h3>Registered Customers</h3>
                    </div>
                    <div>
                        <i className="fab fa-twitter fa-4x"></i>
                        <div className="counter" data-target="01">
                            <CountUp end={100} duration={5} enableScrollSpy/>
                        </div>
                        <h3>Registered Stakeholders</h3>
                    </div>
                    <div>
                        <i className="fab fa-facebook fa-4x"></i>
                        <div className="counter" data-target="03">
                            <CountUp end={100} duration={5} enableScrollSpy/>
                        </div>
                        <h3>Registered Recyclers</h3>
                    </div>
                </div>
            </section>
        </div>
        </section>
    </>
  )
}

export default Consumer;
