import { useEffect, useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
export default function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    api
      .get("/auth/profile")
      .then((res) => setUser(res.data))
      .catch(() => setUser(null));
  }, []);

  const handleLogout = async () => {
    await api.post("/auth/logout");
    toast.success("Logout successful", {
      cancel: {
        label: "Close"
      },
    });

    navigate("/login");
  };

  return (
    <div>
      <Navbar onHandleLogout={handleLogout} user={user} />
      <div className="content px-12 pt-10">
        <h2>Home</h2>
        {user ? (
          <>
            <p>
              Welcome, <b>{user.email}</b>
            </p>
            <p>
              Name: <b>{user.name}</b>
            </p>
          </>
        ) : (
          <p>Loading user...</p>
        )}
      </div>
    </div>
  );
}
