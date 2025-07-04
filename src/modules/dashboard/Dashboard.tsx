import { Box, Card, Typography, IconButton } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import cookies from "@/utils/cookies";
import CreateSharpIcon from "@mui/icons-material/CreateSharp";
import useHandleEditProfile from "./useHandleEditProfile";
import EditProfileModal from "./EditProfileModal";
import { profileEnd } from "console";

export default function DashboardCard() {
  const profileModalItems = useHandleEditProfile();

  return (
    <Card
      sx={{
        maxWidth: "xl",
        backgroundColor: "#fdf0ff",
        padding: 3,
        borderRadius: 2,
        boxShadow: "none",
        margin: "auto",
        mt: 2,
      }}
    >
      <EditProfileModal {...profileModalItems} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "left",
          gap: 2,
          ml: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <CodeIcon sx={{ fontSize: 40, color: "#b421f3" }} />
            <Typography variant="h6" color="text.secondary">
              FrontEnd Developer
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 600,
                mt: 1,
              }}
            >
              {cookies.get("first-name")} {cookies.get("last-name")}{" "}
              <IconButton size="medium" onClick={profileModalItems.toggleEditProfileModal}>
                <CreateSharpIcon />
              </IconButton>
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              flexDirection: "column",
              cursor: "pointer",
            }}
          >
            Change Password
          </Box>
        </Box>
      </Box>
    </Card>
  );
}
