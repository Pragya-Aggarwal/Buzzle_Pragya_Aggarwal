import React, { Component } from 'react';
import './Header.css';

export class Header extends Component {
  render() {
    return <div>
      <div className="input-group">
  <div className="form-outline">
    <input type="search" id="form1" className="form-control" />
  </div>
  <button type="button" className="btn btn-dark" id="button">
    <i className="bi bi-search"></i>
  </button>
  <div className='btn-container'>
  <button type="button" className="btn btn-primary">LogIn</button>
  <button type="button" className="btn btn-primary m-2">SignUp</button>
  
  </div>
 
</div>
  <hr className='border'/>
    </div>;
  }
}

export default Header;
