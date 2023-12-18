import React from 'react';
import './Shop.css';

const Shop = () => {
  return (
    <>
    <div className="left-half">
     
    <img src="photo.jpg" alt=""/> 
    </div>
    <div className="right-half">

       


        


        <h1>RecyClene</h1>
        <p>RS.499</p>

        
        <button class="shop" 
        onclick="window.location.href = 'http://127.0.0.1:5503/login.html?#' ;">
         Buy

        </button>

        <select id="quantity" name="quantity">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>


        

        <div className="rectangle">
            <h2>Description</h2>
            <p id="des">
                Brand: Dairy Vista<br/>
                Capacity: 9L<br/>
                Operating Mechanism: Motors,sensors, Shredder<br/>
                Material: Steel<br/>

               Recommended use for: Kitchen<br/>

               Dimensions: 11” x 11” x 12”
            </p>
        </div>
     
     
        
    <div className="image-container">
        <img src="./replacement.jpg" alt=""/>
        <img src="./secure.jpg" alt=""/>
        <img src="./topbrand.jpg" alt=""/>
        <img src="./7days.jpg" alt=""/>
    </div>
       
    </div>

    
    </>
  )
}

export default Shop;
