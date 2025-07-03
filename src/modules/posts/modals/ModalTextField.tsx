import { TextField, Box } from "@mui/material";

interface ModalTextFieldProps {
  field: string;
  label: string;
  value: string;
  touched?: boolean;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  submitting: boolean;
}

export default function ModalTextField(props: ModalTextFieldProps) {
  const { field, label, value, touched, error, onChange, onBlur, submitting } =
    props;

  return (
    <Box sx={{ marginBottom: "10px" }}>
      <TextField
        fullWidth
        id={field}
        name={field}
        multiline
        type={"text"}
        label={label}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        error={Boolean(touched && error)}
        helperText={touched && error}
        disabled={submitting}
      />
    </Box>
  );
}
