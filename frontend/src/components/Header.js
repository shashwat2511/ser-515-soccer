import { AppBar, Toolbar } from "@material-ui/core";
import React, { useState } from "react";
// import MenuIcon from './MenuIcon.js';
import HamburgerMenu from './HamburgerMenu.js';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Menu from '@mui/material/Menu';
import { blue } from '@mui/material/colors';
// import Map from './Map';

export default function Header() {
    const [open, setOpen] = useState(false);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const openRightMenu = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const iconButton = {
        backgroundColor: '#BF360C'
    }

    return (
        <AppBar className='appBar'>
            <Toolbar className='toolbar' style={{
                height: "4em",
                flexShrink: 0,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
            }}>
                <MenuRoundedIcon fontSize="large" sx={{ color: blue[50] }} style={{
                    cursor: 'pointer',
                    display: open ? 'none' : 'block',
                    zIndex: 10,
                }} onClick={() => setOpen(!open)} />

                <HamburgerMenu open={open} menuTop='8.6vh' setOpen={setOpen}></HamburgerMenu>

                <CloseRoundedIcon fontSize="large" color="action" sx={{ color: blue[50] }} style={{
                    cursor: 'pointer',
                    display: open ? 'block' : 'none',
                    zIndex: 10
                }} onClick={() => setOpen(!open)} />

                <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
                    <Avatar sx={{ width: 32, height: 32, backgroundColor: '#BF360C' }}>M</Avatar>
                </IconButton>

                {/* <MenuIcon open={open} setOpen={setOpen}></MenuIcon> */}

                <Menu
                    anchorEl={anchorEl}
                    open={openRightMenu}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&:before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                    <MenuItem>
                        <Avatar /> Profile
                    </MenuItem>
                    <MenuItem>
                        <Avatar /> My account
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                        <ListItemIcon>
                            <PersonAdd fontSize="small" />
                        </ListItemIcon>
                        Add another account
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <Settings fontSize="small" />
                        </ListItemIcon>
                        Settings
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <Logout fontSize="small" />
                        </ListItemIcon>
                        Logout
                    </MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    );
}