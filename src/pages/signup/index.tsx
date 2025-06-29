import SessionRoute from "@/components/SessionRoute";
import SignupComponent from "@/modules/signup/Signup";

export default function Signup() {
  return (
    <SessionRoute>
      <SignupComponent />
    </SessionRoute>
  );
}
