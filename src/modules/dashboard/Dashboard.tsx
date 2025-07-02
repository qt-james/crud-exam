import { Box, Card, Typography } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import cookies from "@/utils/cookies";

export default function DashboardCard() {
  return (
    <Card
      sx={{
        maxWidth: "xl",
        backgroundColor: "#f0f8ff",
        padding: 3,
        borderRadius: 2,
        boxShadow: "none",
        margin: "auto",
        mt: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "left",
          gap: 2,
          ml: 2,
        }}
      >
        <CodeIcon sx={{ fontSize: 40, color: "#2196f3" }} />
        <Box>
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
            {cookies.get("first-name")} {cookies.get("last-name")}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
}
