import { TextField, Box } from "@mui/material";

interface SignupTextFieldProps {
  field: string;
  label: string;
  value: string;
  touched?: boolean;
  error?: string;
  onChange: (e: React.ChangeEvent<any>) => void;
  onBlur: (e: React.FocusEvent<any>) => void;
}

export default function SignupTextField(props: SignupTextFieldProps) {
  const { field, label, value, touched, error, onChange, onBlur } = props;

  return (
    <Box sx={{ marginBottom: "10px" }}>
      <TextField
        fullWidth
        id={field}
        name={field}
        type={field === "password" ? "password" : "text"}
        label={label}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        error={Boolean(touched && error)}
        helperText={touched && error}
      />
    </Box>
  );
}
