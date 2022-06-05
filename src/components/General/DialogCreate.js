import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { red, yellow, blue } from '@mui/material/colors';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Switch from '@mui/material/Switch';
import PinsController from '../../controllers/PinsController';
import YTPinsController from '../../controllers/YTPinsController';
import PodPinsController from '../../controllers/PodPinsController';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


let selectedOption = 'pin';
let url = '';
let isFav = false;
let errorMessage = '';

export default function DialogCreate() {
  const [open, setOpen] = React.useState(false);
  const [alert, setAlert] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = (event) => {
    event.preventDefault();
    switch (selectedOption) {
      case 'pin':
        createBasicPin();
        break;
      case 'ytpin':
        createPinYT();
        break;
      case 'podpin':
        createPodPin()
        break;
      default:
        break;
    }
  };

  function createBasicPin(){
    let pc = null;
    pc = new PinsController();
    let response = pc.createPin({url: url, user_id: JSON.parse(sessionStorage.user).ID, fav: isFav})
    if (response.status === 'OK') {
      window.location.reload()
    }else{
      errorMessage = response.message;
      setAlert(true);
    }
  }

  function createPodPin(){
    let pc = null;
    pc = new PodPinsController();
    let response = pc.createPin({url: url, user_id: JSON.parse(sessionStorage.user).ID, fav: isFav})
    if (response.status === 'OK') {
      window.location.reload()
    }else{
      errorMessage = response.message;
      setAlert(true);
    }
  }

  async function createPinYT() {
    let pc = new YTPinsController();
    let response = await pc.createPin({ url: url, user_id: JSON.parse(sessionStorage.user).ID, fav: isFav })
    if (response.status === 'OK') {
      window.location.reload()
    }else{
      errorMessage = response.message;
      setAlert(true);
    }
  }


  const onValueChange = (event)  => {
      selectedOption = event.target.value
  }

  const onUrlChange = (event)  => {
    url = event.target.value
  }
  
  const onFavChange = ()  => {
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
    <div  style={{ display: "flex" }}>
      <Button style={{ marginLeft: "auto" }} label="Añadir Pin" onClick={handleClickOpen}>
      < AddCircleIcon></AddCircleIcon>
      </Button>
      <Dialog open={open} onClose={handleClose} onSubmit={handleSave}>
        <DialogTitle>Crear Pin</DialogTitle>
        <DialogContent>
        <FormControl>
            <FormLabel id="pin_type">Tipo</FormLabel>
            <RadioGroup
                row
                aria-labelledby="pin_type"
                name="row-radio-buttons-group"
                onChange={onValueChange}
                defaultValue="pin"
            >
                <FormControlLabel value="pin" control={<Radio sx={{'&.Mui-checked': {color: blue[600],},}}/>} label="Pin" />
                <FormControlLabel value="ytpin" control={<Radio sx={{'&.Mui-checked': {color: red[600],},}}/>} label="YT" />
                <FormControlLabel value="podpin" control={<Radio sx={{'&.Mui-checked': {color: yellow[600],},}}/>} label="Pod" />
            </RadioGroup>
        </FormControl>
          <DialogContentText>
            <FormControlLabel onChange={onFavChange} control={<Switch />} label="Favorito" />
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