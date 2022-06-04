import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import PinsController from '../../controllers/PinsController';

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
    let pc = new PinsController();
    pc.createPin({url: url, user_id: JSON.parse(sessionStorage.user).id, fav: isFav})
    window.location.reload()
  };

  const onUrlChange = (event)  => {
    url = event.target.value
  }
  
  const onFavChange = (event)  => {
    isFav = !isFav
  }

  return (
    <div  style={{ display: "flex" }}>
      <Button style={{ marginLeft: "auto" }} label="Añadir Pin"  onClick={handleClickOpen}>
      < AddCircleIcon></AddCircleIcon>
      </Button>
      <Dialog open={open} onClose={handleClose} onSubmit={handleSave}>
        <DialogTitle>Crear Pin</DialogTitle>
        <DialogContent>
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