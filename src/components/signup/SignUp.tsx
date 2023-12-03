"use client";

import { signinService } from "@/utils/services";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SignUp = () => {
  const router = useRouter();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const [password1, setPassword1] = useState<string>("");
  const [password2, setPassword2] = useState<string>("");

  const onNameChange = (e: any) => {
    setName(e.target.value);
  };

  const onEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const onPasswordChange = (e: any) => {
    if (e.target.id === "p1") {
      setPassword1(e.target.value);
    } else if (e.target.id === "p2") {
      setPassword2(e.target.value);
    }
  };

  const signUpServiceCall = async (name: any, email: any, password: any) => {
    const signinResponse = await signinService(name, email, password);
    if (signinResponse && signinResponse.status) {
      setName("");
      setEmail("");
      setPassword1("");
      setPassword2("");
      alert(signinResponse.message);
      router.push("/");
    } else {
      alert(signinResponse.message || "something went wrong");
    }
  };

  const onSignupClick = () => {
    if (password1 === password2) {
      signUpServiceCall(name, email, password1);
    } else {
      alert("password does not match");
    }
  };
  return (
    <>
      <h2 style={{ textAlign: "center", color: "#333" }}>
        Sign Up with your details
      </h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "300px",
          margin: "0 auto",
          border: "2px solid #ccc",
          padding: "15px",
          borderRadius: "8px",
        }}
      >
        <label style={{ marginBottom: "5px" }}>Name</label>
        <input
          type="text"
          style={{
            marginBottom: "10px",
            padding: "8px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
          onChange={(e: any) => onNameChange(e)}
          value={name}
        />

        <label style={{ marginBottom: "5px" }}>Email</label>
        <input
          type="text"
          style={{
            marginBottom: "10px",
            padding: "8px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
          onChange={(e: any) => onEmailChange(e)}
          value={email}
        />

        <label style={{ marginBottom: "5px" }}>Password</label>
        <input
          type="password"
          style={{
            marginBottom: "10px",
            padding: "8px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
          onChange={(e: any) => onPasswordChange(e)}
          id="p1"
          value={password1}
        />

        <label style={{ marginBottom: "5px" }}>Confirm Password</label>
        <input
          type="password"
          style={{
            marginBottom: "10px",
            padding: "8px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
          onChange={(e: any) => onPasswordChange(e)}
          id="p2"
          value={password2}
        />

        <button
          style={{
            backgroundColor: "#4CAF50",
            color: "white",
            padding: "10px",
            borderRadius: "4px",
            border: "none",
            cursor: "pointer",
          }}
          onClick={() => onSignupClick()}
        >
          Sign Up
        </button>
      </div>
    </>
  );
};

export default SignUp;
