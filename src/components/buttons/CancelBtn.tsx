import { Button } from "@mui/material";
import { ReactNode, MouseEventHandler } from "react";

interface CancelBtnProps {
  title: string;
  onclick?: MouseEventHandler<HTMLButtonElement>;
}

export default function CancelBtn(props: CancelBtnProps) {
  const { title, onclick } = props;

  return (
    <Button variant="outlined" onClick={onclick}>
      {title}
    </Button>
  );
}
