import { Alert, Slide, Snackbar } from "@mui/material";

export default function AlertBar({
  open, onClose, severity, message
}: { open: boolean; onClose: () => void; severity: "success"|"info"|"warning"|"error"; message: string; }) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={onClose}
      TransitionComponent={(props) => <Slide {...props} direction="down" />}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert onClose={onClose} severity={severity} variant="filled" sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
}
