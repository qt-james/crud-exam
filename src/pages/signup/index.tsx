import AuthCard from "@/components/auth/AuthCard";
import PublicLayout from "@/components/layout/PublicLayout";

export default function Signup() {
  return (
    <PublicLayout>
      <AuthCard
        title="Signup"
        subtitle="Fill up all of the necessary field to register!"
      >
        <div>Signup</div>
      </AuthCard>
    </PublicLayout>
  );
}
