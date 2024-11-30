import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Admin.css';

const Admin = () => {
  const [user, setUser] = useState([]); // Initialize as an empty array

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/user/getUser"); // Fetch data from the backend
        setUser(response.data); 
        console.log(response.data); // Log the response data
      } catch (error) {
        console.error("Error in getting data:", error); // Handle the error
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs only once

  const handelDelete = async (id) => {
    try {
    
        await axios.delete(`http://localhost:5000/user/deleteUser/${id}`);
        
        console.log("This id is deleted:", id);
    } catch (error) {
        console.error("Error in giving the id to delete:", error);
    }
};


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
                <th>User ID</th>
                <th>Email</th>
                <th>Number</th>
                <th>Actions</th> {/* Add actions column */}
              </tr>
            </thead>
            <tbody>
              {user.length > 0 ? (
                user.map((users) => (
                  <tr key={users._id}>
                    <td>{users._id}</td>
                    <td>{users.email}</td>
                    <td>{users.number}</td> 
                    <td>
                      <button
                        className="table-btn delete-btn"
                        onClick={() => handelDelete(users._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5">No users found</td> {/* Update colSpan to 5 */}
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admin;
