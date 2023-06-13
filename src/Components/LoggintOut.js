import React, { useState } from "react";
import { Alert, Button } from "react-bootstrap";
import { useAuth } from "../context/ContextApi";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const [error, setError] = useState("");
  const { logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    setError("");
    try {
      await logout();
      navigate("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <div className="w-100 text-center m-2">
      {error && <Alert variant="danger">{error}</Alert>}
      <Button variant="danger" onClick={handleLogout}>
        Log Out
      </Button>
    </div>
  );
};

export default Logout;
