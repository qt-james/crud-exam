import ProtectedRoute from "@/components/ProtectedRoute";

export default function Posts() {
  return (
    <ProtectedRoute>
      <div>Posts</div>
    </ProtectedRoute>
  );
}
