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
import YTPinsController from '../../controllers/YTPinsController';

let url = '';
let isFav = false;

export default function YTDialogCreate() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = (event) => {
    event.preventDefault();
    createPin();
  };

  async function createPin() {
    let pc = new YTPinsController();
    let response = await pc.createPin({ url: url, user_id: JSON.parse(sessionStorage.user).id, fav: isFav })
    if (response.status === 'OK') window.location.reload()
  }

  const onUrlChange = (event) => {
    url = event.target.value
  }

  const onFavChange = (event) => {
    isFav = !isFav
  }

  return (
    <div style={{ display: "flex" }}>
      <Button style={{ marginLeft: "auto" }} label="Añadir Pin" onClick={handleClickOpen}>
        < AddCircleIcon></AddCircleIcon>
      </Button>
      <Dialog open={open} onClose={handleClose} onSubmit={handleSave}>
        <DialogTitle>Crear YouTube Pin</DialogTitle>
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