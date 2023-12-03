"use client";

import { userContext } from "@/app/ContextWrapper";
import { loginService } from "@/utils/services";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";

const Login = () => {
  const router = useRouter();

  const { nameOfUser, setNameOfUser, usernameOfUser, setUsernameOfUser } =
    useContext(userContext);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onUsernameChange = (e: any) => {
    setUsername(e.target.value);
  };

  const onPasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const loginServiceCall = async (username: any, password: any) => {
    const loginResponse = await loginService(username, password);
    if (loginResponse && loginResponse.status) {
      setUsername("");
      setPassword("");
      localStorage.setItem("token", `Bearer ${loginResponse.token}`);
      localStorage.setItem(
        "refreshToken",
        `Bearer ${loginResponse.refreshToken}`
      );
      setNameOfUser(loginResponse.nameOfUser);
      setUsernameOfUser(loginResponse.usernameOfUser);
      router.push("/dashboard");
    } else {
      setUsername("");
      setPassword("");
      alert(loginResponse.message || "Something went wrong");
    }
  };

  const onLoginClick = () => {
    loginServiceCall(username, password);
  };

  const onSignupClick = () => {
    router.push("/signup");
  };

  const onAdminPageClick = () => {
    router.push("/adminPage");
  };
  return (
    <>
      <h1 style={{ textAlign: "center", color: "#3498db" }}>
        Welcome to the Shopping Site
      </h1>

      <div
        style={{
          maxWidth: "400px",
          margin: "auto",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h3 style={{ textAlign: "center", color: "#2c3e50" }}>Login</h3>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <label style={{ margin: "8px 0", color: "#7f8c8d" }}>
            Email Id/Username
          </label>
          <input
            type="text"
            onChange={(e: any) => onUsernameChange(e)}
            value={username}
            style={{
              padding: "10px",
              margin: "8px 0",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />

          <label style={{ margin: "8px 0", color: "#7f8c8d" }}>Password</label>
          <input
            type="password"
            onChange={(e: any) => onPasswordChange(e)}
            value={password}
            style={{
              padding: "10px",
              margin: "8px 0",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />

          <button
            onClick={() => onLoginClick()}
            style={{
              backgroundColor: "#3498db",
              color: "#fff",
              padding: "10px",
              borderRadius: "4px",
              cursor: "pointer",
              border: "none",
            }}
          >
            LOGIN
          </button>

          <label style={{ margin: "8px 0", color: "#7f8c8d" }}>New User</label>
          <button
            onClick={() => onSignupClick()}
            style={{
              backgroundColor: "#2ecc71",
              color: "#fff",
              padding: "10px",
              borderRadius: "4px",
              cursor: "pointer",
              border: "none",
            }}
          >
            SIGNUP
          </button>
          <button
            onClick={() => onAdminPageClick()}
            style={{
              backgroundColor: "#e74c3c",
              color: "#fff",
              padding: "10px",
              borderRadius: "4px",
              cursor: "pointer",
              border: "none",
              marginTop: "10px",
            }}
          >
            Go to Admin Page
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
