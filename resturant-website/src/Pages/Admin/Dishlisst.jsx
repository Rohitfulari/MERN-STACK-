import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react'

const Dishlisst = () => {
    const [dish,setDish] = useState([]);

    useEffect(() => {
        const fetchDish = async() => {
                try {
                const dishes = await axios.get("http://localhost:5000/getDish");
                setDish(dishes.data);
                console.log("dish List in the menu is:",dishes.data)
            }
            
         catch (error) {
            console.log("Error in getting the dishes:",error);
            
        }
    };
        fetchDish();

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
                <th>Order ID</th>
                <th>Name</th>
                <th>price</th>
               
                <th>Actions</th> 
              </tr>
            </thead>
            <tbody>
              {dish.length > 0 ? (
                dish.map((dishL) => (
                  <tr key={dishL._id}>
                    <td>{dishL._id}</td>
                    <td>{dishL.name}</td>
                    <td>{dishL.price}</td> 
                     
                    
                    
                      <button className="table-btn" >Delete</button>
                      
                    
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

export default Dishlisst