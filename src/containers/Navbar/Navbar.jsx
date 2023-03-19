import React, { useState } from "react";
import { Nav, NavItem } from "reactstrap";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Sling as Hamburger } from "hamburger-react";
import { Typography } from "@mui/material";
import { Button } from '@mui/material';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';

import './navbar.css'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='navbar'>
      <NavItem>
        <AnchorLink  href="/" >
            <Typography variant='h3' sx={{ ":hover": { cursor: 'pointer'}}}>Venom</Typography>
        </AnchorLink>
      </NavItem>
      <Nav className={`${isOpen ? "open" : "close"} navbar-menu`}>
       
        {/* <NavItem>
            <AnchorLink href="" className="nav-item">Product</AnchorLink>
        </NavItem> */}
        <NavItem>
            <AnchorLink href="" className="nav-item">Tickets</AnchorLink>
        </NavItem>
        <NavItem>
            <AnchorLink href="" className="nav-item">Schedule</AnchorLink>
        </NavItem>
        <NavItem>
            <AnchorLink href="" className="nav-item">Bookings</AnchorLink>
        </NavItem>
        <NavItem>
            <AnchorLink href="" className="nav-item">Releases</AnchorLink>
        </NavItem>
      </Nav>
      <Button variant="outlined" href="" startIcon={<AccountBalanceWalletOutlinedIcon/>} sx={{ color: 'whitesmoke', borderColor: 'whitesmoke', fontFamily: 'Nunito', fontWeight: '600', letterSpacing: '1px', ":hover": {
        borderColor: '#400B19' }}} className='nav-btn'>
        Get Tickets
      </Button>
      <Hamburger
        duration={0.3}
        toggled={isOpen}
        toggle={setIsOpen}
        easing='ease-in'
      />
    </div>
  );
};

export default Navbar;
