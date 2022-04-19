import React from 'react';
import './App.css';

const arrow = '<';
function App(props) {
  const { employee } = props;

  return (
    <div className="container">
      {/* Start Your code here */}
      <div className="name">
        <div className="arrow">
          <span>{arrow}</span>
        </div>
        <div className="id">
          <span>{employee.name}</span>
          <span>{employee.employeeID}</span>
        </div>
        <div className="btn">
          <button type="submit">Print</button>
        </div>
      </div>

      <div className="info">
        <div className="appointment">
          <label htmlFor="">Label: </label>
          {employee.appointment}
        </div>
        <div className="email">
          <label htmlFor="">Email: </label>
          {employee.email}
        </div>
        <div className="phone">
          <label htmlFor="">Phone: </label>
          {employee.phone}
        </div>
      </div>

      <div className="order">
        <div className="status">
          <label htmlFor="">Status</label>
          <br />
          <li>{employee.status}</li>
        </div>
        <div className="door">
          <label htmlFor="">Door</label>
          <br />
          {employee.door}
        </div>
        <div className="time">
          <label htmlFor="">Time</label>
          <br />
          {employee.time}
        </div>
      </div>

      <div className="list">
        <div className="check">
          <input type="checkbox" name="" id="check" />
        </div>
        <div className="image">
          <img src={employee.profileImg} alt="" />
        </div>
        <div className="product">
          <div className="productName">{employee.productName}</div>
          <div className="productDesc">{employee.productDesc}</div>
        </div>
      </div>
    </div>
  );
}

export default App;