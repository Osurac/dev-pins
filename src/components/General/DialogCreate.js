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
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import PinsController from '../../controllers/PinsController';

let selectedOption = '';
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
    switch (selectedOption) {
      case 'pin':
         pc = new PinsController();
        break;
      case 'ytpin':
         pc = new PinsController();
        break;
      case 'podpin':
         pc = new PinsController();
        break;
      default:
        break;
    }
    pc.createPin({url: url, user_id: JSON.parse(sessionStorage.user).ID, fav: isFav})
    handleClose();
  };

  const onValueChange = (event)  => {
      selectedOption = event.target.value
  }

  const onUrlChange = (event)  => {
    url = event.target.value
  }
  
  const onFavChange = (event)  => {
    isFav = event.target.value
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
            >
                <FormControlLabel value="pin" control={<Radio sx={{'&.Mui-checked': {color: blue[600],},}}/>} label="Pin" />
                <FormControlLabel value="ytpin" control={<Radio sx={{'&.Mui-checked': {color: red[600],},}}/>} label="YouTube" />
                <FormControlLabel value="podpin" control={<Radio sx={{'&.Mui-checked': {color: yellow[600],},}}/>} label="Podcast" />
            </RadioGroup>
        </FormControl>
          <DialogContentText>

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
             <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        This is an error alert — <strong>check it out!</strong>
      </Alert>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleSave}>Guardar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}