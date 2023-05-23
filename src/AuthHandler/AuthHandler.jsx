import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../UserContext/UserContex";

function AuthHandler() {
  const [params, setParams] = useSearchParams();
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    setUser({
      googleId: params.get("id"),
      loggedIn: true,
      name: params.get("name"),
      email: params.get("email"),
      photo: params.get("photo"),
    });
    navigate("/");
  });
  return (
    <div>
      Name: {params.get("name")},Email: {params.get("email")}
    </div>
  );
}

export default AuthHandler;
