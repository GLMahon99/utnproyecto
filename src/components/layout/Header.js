import React from "react";
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
// import '../../styles/components/Layout/Header.css';
import { Button, Box } from "@mui/material";
import { makeStyles } from "@mui/material";


const navItems = ['home','nosotros', 'noticias', 'contacto'];

const Header = (props) => {

    
    
    return(
        <AppBar position="fixed" color="primary" >
          <Toolbar>
            <Typography variant="h6">
              lalala
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
          </Box>
          </Toolbar>
        </AppBar>
    )
};
export default Header;