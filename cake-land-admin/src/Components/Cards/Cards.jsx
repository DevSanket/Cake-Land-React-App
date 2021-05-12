import React from 'react';
import { Link } from 'react-router-dom';
import './Cards.scss';

const Cards = () => {
    return ( 
        <div className="cards">
        <div className="card">
          <Link to="/addItem">
          <span className="card-icon">
          <i className="fad fa-file-plus fa-10x icon"></i>
          </span>
          </Link>
          
        </div>
        <div className="card">
          <Link to="/removeItem">
          <span className="card-icon trash">
          <i class="fad fa-trash-alt fa-10x"></i>
          </span>
          </Link>
          
        </div>
        
        <div className="card">
          <Link to="/updateItem">
          <span className="card-icon update">
          <i class="fad fa-file-edit fa-10x"></i>
          </span>
          </Link>
        </div>
      </div>
     );
}
 
export default Cards;