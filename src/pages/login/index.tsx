import LoginComponent from "@/modules/login/Login";
import SessionRoute from "@/components/routes/SessionRoute";

export default function Login() {
  return (
    <SessionRoute>
      <LoginComponent />
    </SessionRoute>
  );
}
