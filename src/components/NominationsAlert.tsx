import { Snackbar, SnackbarCloseReason } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeAlert, selectNomination } from "../slices/nominationSlice";

function NominationsAlert() {
  const dispatch = useDispatch();
  const { alertOpen } = useSelector(selectNomination);

  const handleClose = (
    event: React.SyntheticEvent<any, Event>,
    reason: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }

    dispatch(closeAlert(null));
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={alertOpen}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <Alert
        elevation={6}
        variant="filled"
        onClose={(event) => dispatch(closeAlert(null))}
        severity="success"
      >
        Succesfully added 5 nominations
      </Alert>
    </Snackbar>
  );
}

export default NominationsAlert;
