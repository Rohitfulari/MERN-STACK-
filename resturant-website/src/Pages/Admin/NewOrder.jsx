import axios from 'axios';
import React, { useEffect, useState } from 'react'

const NewOrder = () => {

    const[orders,setOrders] = useState("");

    useEffect(() => {
        const fetchOrder = async () => {

            try {
                const result = await axios.get("http://localhost:5000/myOrder/addToCartOrder");
                setOrders(result.data);
                console.log("New Orders are:",result.data);
                
            } catch (error) {
                console.log("Error on getting the data:",error);
                
            }


        };
        fetchOrder();


    },[])



  return (
    <div className="Admin">
      <h1>Admin Panel</h1>

      <div className="cont1"></div>
      <div className="cont2">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a className="nav-link active" href="/admin">User-List</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/newOrder">New-order</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/dishList">Dish-List</a>
          </li>
          <li className="nav-item">
            <button className="logout-btn">
              <a className="nav-link" href="/">LogOut</a>
            </button>
          </li>
        </ul>

        {/* Table */}
        <div className="table-container">
          <table className="styled-table">
            <thead>
              <tr>
                <th>Order Id</th>
                <th>Name</th>
                <th>price</th>
               
                <th>Actions</th> {/* Add actions column */}
              </tr>
            </thead>
            <tbody>
              {orders.length > 0 ? (
                orders.map((order) => (
                  <tr key={order._id}>
                    <td>{order._id}</td>
                    <td>{order.name}</td>
                    <td>{order.price}</td> 
                     
                    
                    
                      <button className="table-btn" >Delivered</button>
                      
                    
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5">No users found</td> 
                </tr>
              )}

            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default NewOrder