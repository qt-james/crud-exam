import { Button } from "@mui/material";
import { MouseEventHandler } from "react";

interface SubmitBtnProps {
  title: string;
  onclick?: MouseEventHandler<HTMLButtonElement>;
  isDisabled?: boolean;
  isLoading?: boolean;
}

export default function SubmitBtn(props: SubmitBtnProps) {
  const { title, onclick, isDisabled, isLoading } = props;

  return (
    <Button
      disabled={isDisabled}
      loading={isLoading}
      variant="contained"
      onClick={onclick}
    >
      {title}
    </Button>
  );
}
