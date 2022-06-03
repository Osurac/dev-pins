import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import PinsController from '../../controllers/PinsController';
import PodPinsController from '../../controllers/PodPinsController';
import YTPinsController from '../../controllers/YTPinsController';
import ArchiveIcon from '@mui/icons-material/Archive';

export default function PinDialogDelete(props) {
  const [open, setOpen] = React.useState(false);
  
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
    let pc = getController(props.type);
    pc.deletPin({pin_id: props.pin_id})
    return props.saveHandler();
  };

  return (
    <div  style={{ display: "flex" }}>
      <span style={{ marginLeft: "auto" }} label="Añadir Pin" variant="outlined" onClick={handleClickOpen}>
      <ArchiveIcon/> Delete pìn
      </span>
      <Dialog open={open} onClose={handleClose} onSubmit={handleSave}>
        <DialogTitle>Delete Pin</DialogTitle>
        <DialogContent>
          <DialogContentText>
              ¿Realmente quieres eliminar este pin?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleSave}>Aceptar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}