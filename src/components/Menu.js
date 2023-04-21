import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { Link } from "react-router-dom"

const MenuBar = ()=>{
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button className='menu' style={{backgroundColor: "#dd4058", borderRadius: "3rem", }} variant="contained" {...bindTrigger(popupState)}>
           <div className='menuLink'>MENU</div> 
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}><Link className="link" to="/">
              <div>Home</div>
          </Link></MenuItem>
            <MenuItem onClick={popupState.close}><Link className="link" to="/profile/login">
              <div>Login</div>
          </Link></MenuItem>
            <MenuItem onClick={popupState.close}><Link className="link" to="/profile/register">
              <div>Signup</div>
          </Link></MenuItem>
          {/* <MenuItem onClick={popupState.close}><Link className="link" to="/about">
              <div>About</div>
            </Link></MenuItem> */}
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}

export default MenuBar


