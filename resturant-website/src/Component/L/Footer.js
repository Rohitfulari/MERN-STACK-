import React from 'react'
import { Box, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Margin } from '@mui/icons-material';


const Footer = () => {
  return (
    <>
        <Box 
            sx={{ textAlign:"center" , bgcolor:"black", color:"wheat",p:3}}>

            <Box sx={{my:3 ,"& svg":{
              fontSize:"60px",
              cursor:"pointer",
              mr:2
            },
            "& svg:hover":{
              color:"goldenrod",
              transform:'translate(5px)',
              transition:'all 500ms'
            } }}>
              {/* Icons */}
              <InstagramIcon/>
              <WhatsAppIcon/>
              <GitHubIcon/>
            </Box>

            <Typography variant="h6">
                All Rights Reserved &copy;
            </Typography>

        </Box>
    </>
  )
}

export default Footer
