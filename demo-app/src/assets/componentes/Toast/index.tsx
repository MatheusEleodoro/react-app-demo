import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar, { SnackbarProps } from '@mui/material/Snackbar';
import MuiAlert, { AlertColor, AlertProps } from '@mui/material/Alert';
import { State } from 'history';




export type ToastProps = {
  tipo?: AlertColor
  mensagem?: string
  duracao?: number
  toastProps?:SnackbarProps
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Toast = (props: ToastProps) => {
  const [open, setOpen] = React.useState(true);
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Stack spacing={2} sx={{ width: '50%' }}>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={open}
        autoHideDuration={props.duracao}
        onClose={handleClose} >

        <Alert onClose={handleClose} severity={props.tipo} sx={{ width: '100%' }}>
          {props.mensagem}
        </Alert>

      </Snackbar>
    </Stack>
  );
}
export default Toast;
