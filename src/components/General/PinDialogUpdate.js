import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import PinsController from '../../controllers/PinsController';
import PodPinsController from '../../controllers/PodPinsController';
import YTPinsController from '../../controllers/YTPinsController';
import EditIcon from '@mui/icons-material/Edit';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

let errorMessage = '';

export default function PinDialogUpdate(props) {
  const [open, setOpen] = React.useState(false);
  const [alert, setAlert] = React.useState(false);

  let url = props.defaultValue;
  let isFav = props.isFav;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    props.closeHandler();
  };

  const getController = (type) => {
    let pc = null;
    switch (type) {
      case 'pin':
        pc = new PinsController();
        break;
      case 'ytpin':
        console.log("wii")
        pc = new YTPinsController();
        break;
      case 'podpin':
        pc = new PodPinsController();
        break;
      default:
        break;
    }
    return pc;
  };


  const handleSave = (event) => {
    event.preventDefault();
    updatePin();
  };

  async function updatePin() {
    let pc = getController(props.type)
    let response = await pc.updatePin({ pin_id: props.pin_id, url: url, user_id: JSON.parse(sessionStorage.user).ID, fav: isFav })

    if (response.status === 'OK') {
      return props.saveHandler();
    } else {
      console.log(response.status)
      errorMessage = response.message;
      setAlert(true);
    }
  }

  const onUrlChange = (event) => {
    url = event.target.value
  }

  const onFavChange = (event) => {
    isFav = !isFav
  }

  const handleCloseAlert = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setAlert(false);
  };

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  return (
    <div style={{ display: "flex" }}>
      <span label="Añadir Pin" onClick={handleClickOpen}>
        <EditIcon /> Update pin
      </span>
      <Dialog open={open} onClose={handleClose} onSubmit={handleSave}>
        <DialogTitle>Update Pin</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <FormControlLabel onChange={onFavChange} control={<Switch defaultChecked={props.isFav} />} label="Favorito" />
          </DialogContentText>
          <TextField
            onChange={onUrlChange}
            autoFocus
            margin="dense"
            id="url"
            label="URL"
            type="text"
            fullWidth
            variant="standard"
            defaultValue={props.defaultValue}
          />

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleSave}>Guardar</Button>
        </DialogActions>
      </Dialog>
      <Snackbar open={alert} autoHideDuration={3000} onClose={handleCloseAlert}>
        <Alert onClose={handleCloseAlert} severity="error" sx={{ width: '100%' }}>
          {errorMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}