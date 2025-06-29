import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { IconButton } from "@mui/material";

interface ActionBtnProps {
  isEdit?: boolean;
  isDelete?: boolean;
}

export default function ActionBtn(props: ActionBtnProps) {
  const { isEdit, isDelete } = props;
  return (
    <IconButton>
      {isEdit ? (
        <ModeEditOutlinedIcon color="primary" />
      ) : isDelete ? (
        <DeleteOutlinedIcon color="error" />
      ) : (
        <RemoveRedEyeOutlinedIcon />
      )}
    </IconButton>
  );
}
