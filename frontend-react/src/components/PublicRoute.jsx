import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import api from "../api";
import LoadingSpinner from "./LoadingSpinner";

export default function PublicRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await api.get("/auth/profile");
        setAuthenticated(true);
      } catch (err) {
        setAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, []);

  if (loading) return <LoadingSpinner/>;
  if (authenticated) return <Navigate to="/dashboard" />;
  return children;
}
