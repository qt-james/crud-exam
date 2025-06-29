import AuthCard from "@/components/auth/AuthCard";
import PublicLayout from "@/components/layout/PublicLayout";

export default function Login() {
  return (
    <PublicLayout>
      <AuthCard title="Login" subtitle="Please put in your credentials!">
        <div>Login</div>
      </AuthCard>
    </PublicLayout>
  );
}
