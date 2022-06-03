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


let selectedOption = 'pin';
let url = '';
let isFav = false;

export default function DialogCreate() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = (event) => {
    event.preventDefault();
    let pc = null;
    console.log(selectedOption)
    switch (selectedOption) {
      case 'pin':
         pc = new PinsController();
        break;
      case 'ytpin':
         pc = new YTPinsController();
        break;
      case 'podpin':
         pc = new PodPinsController();
        break;
      default:
        break;
    }
    pc.createPin({url: url, user_id: JSON.parse(sessionStorage.user).ID, fav: isFav})
    window.location.reload()
  };

  const onValueChange = (event)  => {
      selectedOption = event.target.value
  }

  const onUrlChange = (event)  => {
    url = event.target.value
  }
  
  const onFavChange = ()  => {
    isFav = !isFav
  }

  return (
    <div  style={{ display: "flex" }}>
      <Button style={{ marginLeft: "auto" }} label="Añadir Pin" variant="outlined" onClick={handleClickOpen}>
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
    </div>
  );
}