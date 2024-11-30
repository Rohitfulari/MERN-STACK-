import React from 'react';

import Layout from '../Component/L/Layout';
import { Box, Card, CardMedia, CardActionArea, CardContent, Typography, Button } from '@mui/material';
import { MenuList } from '../data/data';
import { useLocation } from 'react-router-dom';

const Menu = ({ cart, setCart }) => {

  const handleAddToCart = (menu) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item.name === menu.name);

      if (existingItem) {
        
        return prevCart.map(item =>
          item.name === menu.name ? { ...item, count: item.count + 1 } : item
        );
      } else {
        return [...prevCart, { ...menu, count: 1 }];
      }
    });
  };
  

  return (
    <Layout>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {MenuList.map((menu) => (
          <Card key={menu.id} sx={{ maxWidth: '390px', display: 'flex', m: 2 }}>
            <CardActionArea>
              <CardMedia sx={{ minHeight: '400px' }} component={'img'} src={menu.image} alt={menu.name} />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {menu.name}
                </Typography>
                <Typography variant="body2">
                  {menu.description}
                </Typography>
                <Button
                  sx={{ marginLeft: '50px', mt: 2 }}
                  variant='contained'
                  onClick={() => handleAddToCart(menu)}
                >
                  ADD TO CART
                </Button>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Layout>
  );
};

export default Menu;