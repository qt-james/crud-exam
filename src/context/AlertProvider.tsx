import React, { createContext, useState, useContext, ReactNode } from "react";
import { Snackbar, Alert } from "@mui/material";

type AlertSeverity = "success" | "error";

type AlertContextType = {
  showAlert: (message: string, severity: AlertSeverity) => void;
};

const AlertContext = createContext<AlertContextType | undefined>(undefined);

export const AlertProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState<AlertSeverity>("success");

  const showAlert = (msg: string, sev: AlertSeverity) => {
    setMessage(msg);
    setSeverity(sev);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <AlertContext.Provider value={{ showAlert }}>
      {children}
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </AlertContext.Provider>
  );
};

export const useAlert = () => useContext(AlertContext)!;
