import React from 'react';
import { Link } from 'react-router-dom';
import pastry from '../../assets/pastry.png';
import swiss from '../../assets/swiss.png';
import donut from '../../assets/donut.png';
import dessert from '../../assets/dessert.png';
import cupcake from '../../assets/cupcake.png';
import cake from '../../assets/cake.png';
import muffin from '../../assets/muffin.png';

const ProductAdd = () => {
    return ( 
        <div className="product_add">
            <div className="cards">
        <div className="card">
          <Link to="/cakeUpdate">
          <span className="card-icon ">
          <img src={cake} alt="cake" style={{height:180,width:180,padding:20}}/>
          </span>
          </Link>
          
        </div>
        <div className="card">
          <Link to="/CupCakeUpdate">
          <span className="card-icon">
          <img src={cupcake} alt="cupcake" style={{height:180,width:180,padding:20}}/>
          </span>
          </Link>
          
        </div>
        
        <div className="card">
          <Link to="/donutsUpdate">
          <span className="card-icon">
          <img src={donut} alt="donut" style={{height:180,width:180,padding:20}}/>
          </span>
          </Link>
        </div>
        <div className="card">
          <Link to="/dessertsUpdate">
          <span className="card-icon">
          <img src={dessert} alt="dessert" style={{height:180,width:180,padding:20}}/>
          </span>
          </Link>
          
        </div>
        <div className="card">
          <Link to="/pastryUpdate">
          <span className="card-icon">
          <img src={pastry} alt="pastry" style={{height:180,width:180,padding:20}}/>
          </span>
          </Link>
          
        </div>
        <div className="card">
          <Link to="/muffinUpdate">
          <span className="card-icon">
          <img src={muffin} alt="muffin" style={{height:180,width:180,padding:20}}/>
          </span>
          </Link>
          
        </div>
        <div className="card">
          <Link to="/swissUpdate">
          <span className="card-icon">
          <img src={swiss} alt="swiss" style={{height:180,width:180,padding:20}}/>
          </span>
          </Link>
          
        </div>
      </div>
        </div>
     );
}
 
export default ProductAdd;