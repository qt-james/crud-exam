import ProtectedRoute from "@/components/routes/ProtectedRoute";

export default function Posts() {
  return (
    <ProtectedRoute>
      <div>Posts</div>
    </ProtectedRoute>
  );
}
