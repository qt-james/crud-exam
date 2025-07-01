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
import cookies from "@/utils/cookies";
import { useRouter } from "next/router";

export default function Testing() {
  const { logout } = useAuth();
  const auth = cookies.get("SESSION_COOKIE");
  const [open, setOpen] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    if (!auth) {
      setOpen(true);
    }
  }, [auth]);

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
