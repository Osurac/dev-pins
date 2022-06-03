import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import YouTube from '@mui/icons-material/YouTube';
import StarsIcon from '@mui/icons-material/Stars';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import Divider from '@mui/material/Divider';

import PinDialogUpdate from '../General/PinDialogUpdate';
import PinDialogDelete from '../General/PinDialogDelete';

export default function BasicPinView(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleEdit = () => {
    setAnchorEl(null);
    window.location.reload()
  };
  const handleDelete = () => {
    setAnchorEl(null);
    window.location.reload()
  };
  return (
    <div className='px-3 pt-3'>
      <Card>
        <CardHeader
          className=''
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} >
                <YouTube/>
            </Avatar>
          }
          action={
            <div>
              <IconButton aria-label="favourite">
                <StarsIcon  color={props.fav ? 'success' : 'primary'} />
              </IconButton>
              <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
              >
                <MoreVertIcon />
              </IconButton>
              <StyledMenu
                id="long-menu"
                MenuListProps={{
                  'aria-labelledby': 'long-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
              >
                   
                <MenuItem  disableRipple>
                <PinDialogUpdate closeHandler={handleClose} type="ytpin" saveHandler={handleEdit} defaultValue={props.url}  isFav={props.fav} pin_id={props.pin_id}></PinDialogUpdate>
                </MenuItem>
                <Divider sx={{ my: 0.5 }} />
                <MenuItem disableRipple>
                  <PinDialogDelete closeHandler={handleClose} type="ytpin" saveHandler={handleDelete} pin_id={props.pin_id} ></PinDialogDelete>
                </MenuItem>
              </StyledMenu>
            </div>
          }
          title={props.url}
          subheader="categoria"
        />
      </Card>
    </div>
  );
}

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));