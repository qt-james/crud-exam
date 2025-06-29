import LoginComponent from "@/modules/login/Login";
import SessionRoute from "@/components/SessionRoute";

export default function Login() {
  return (
    <SessionRoute>
      <LoginComponent />
    </SessionRoute>
  );
}
