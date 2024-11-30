import React from 'react'
import Layout from '../Component/L/Layout'
import { Box,Paper,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Typography } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';

 
const Contact = () => {
  return (
    <Layout>
        <Box sx={{my:5 ,ml:10,"& h4":{fontWeight:'bold', mb:2 }}}>

          <Typography variant="h4">
            Contact My Reasturant
          </Typography>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat quod,
            suscipit, aperiam totam autem culpa cum eveniet dolorum quasi est
            perspiciatis laborum. Nam recusandae nihil quia odio voluptatibus
            facere omnis facilis rerum? Ab eum beatae nobis reiciendis, qui
            temporibus aliquid, nesciunt velit sed quam recusandae necessitatibus,
            tempora maxime. Repellendus incidunt, maxime labore dolorum eos
            aperiam unde? At veritatis nesciunt eos quas cupiditate blanditiis est
            quam maiores, amet, soluta exercitationem voluptatum, veniam
            assumenda? Ratione perferendis officiis deserunt nostrum aspernatur
            sed asperiores! Earum sunt placeat ducimus sint, deleniti amet esse
            saepe voluptatem commodi laudantium quibusdam repellat nobis libero at
            consectetur adipisci ipsa.
          </p>

        </Box>
        <Box sx={{m:3 ,
        width:"600px",
        ml:10,
        "@media (max-width:600px)":{
          width:"300px",
        }
        }}>
          <TableContainer component={Paper}>
            <Table aria-label="contact table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{bgcolor:'black' ,color:'wheat'}} align="center">
                    Contact Detail
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>

                <TableRow>
                  <TableCell>
                    <SupportAgentIcon sx={{color:'red',pt:1 }}/> 9890805984 (tollfree)
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    <MarkEmailUnreadIcon sx={{color:'red',pt:1 }}/> rohitfulari2000@gmail.com
                  </TableCell>
                </TableRow>

              </TableBody>


            </Table>
          </TableContainer>
        </Box>
    </Layout>
  )
}

export default Contact