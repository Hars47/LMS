import { Navigate } from "react-router-dom";
import { ReactNode } from "react";

export default function ProtectedRoute({
  isAuthed,
  children,
}: { isAuthed: boolean; children: ReactNode }) {
  if (!isAuthed) return <Navigate to="/login" replace />;
  return <>{children}</>;
}
