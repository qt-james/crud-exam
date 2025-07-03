import { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import { useAuth } from "@/context/AuthProvider";
import { useRouter } from "next/router";

export default function Testing() {
  const { logout, isAuth } = useAuth();
  const [open, setOpen] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    if (isAuth) {
      setOpen(true);
    }

    if (!isAuth) {
      router.push("/");
    }
  }, [isAuth]);

  const handleClose = () => {
    setOpen(false);
    logout();
    router.push("/login");
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xs">
      <DialogTitle>Access Denied</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Your session may have expired or you don’t have permission to access
          this resource.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary" variant="contained">
          Logout
        </Button>
      </DialogActions>
    </Dialog>
  );
}
