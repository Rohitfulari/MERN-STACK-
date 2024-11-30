import React, { useEffect, useState } from 'react';
import "../Action/CartAction.css";
import axios from 'axios';


// cart get the data from menu.js as they both are commonly defined in app.js 
const CartAction = ({ cart = [] }) => {
  const [box, setBox] = useState([]);

  useEffect(() => {
    console.log('Cart in action:', cart);
  
    setBox(cart);

    if(cart.length>0){

      saveCartData(cart);

    }
  }, [cart]);

  const saveCartData = async (cart) => {
    try {
      const cartItems = cart.map(item => ({
        name: item.name,
        price: item.price,
        description: item.description
      }));

      //endpoint for this is i  orderRoute.js
  
      const res = await axios.post('http://localhost:5000/myOrder', { items: cartItems });
      console.log("Cart details saved to database:", res.data);
    } catch (error) {
      alert("Data not added to the cart database");
    }
  }
  


  return (
    <div className='cart'>
      <div className='card'>
        {cart.length === 0 ? (
          <div className="empty">
            <h1>NO ITEMS ADDED</h1>
          </div>
        ) : (
          <div className='full'>
            <h2>ORDER LIST :</h2>
            <table className='cart-table'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>NAME</th>
                  <th>PRICE</th>
                  <th>DESCRIPTION</th>
                </tr>
              </thead>
              <tbody>
                {box.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartAction;
