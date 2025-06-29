import SessionRoute from "@/components/routes/SessionRoute";
import SignupComponent from "@/modules/signup/Signup";

export default function Signup() {
  return (
    <SessionRoute>
      <SignupComponent />
    </SessionRoute>
  );
}
