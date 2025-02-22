import { useState } from "react";
import styles from "./AuthInputs.module.css";
import { styled } from "styled-components";

const StyledControls = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #6b7280;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  line-height: 1.5;
  background-color: #d1d5db;
  color: #374151;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;
export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === "email") {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes("@");
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div className={styles.authInputs}>
      <StyledControls>
        <p>
          <StyledLabel
            className={emailNotValid ? styles.invalid : ""}
          >
            Email
          </StyledLabel>
          <StyledInput
            type="email"
            className={emailNotValid ? styles.invalid : undefined}
            onChange={(event) => handleInputChange("email", event.target.value)}
          />
        </p>
        <p>
          <StyledLabel
            className={`${styles.label} ${
              passwordNotValid ? styles.invalid : ""
            }`}
          >
            Password
          </StyledLabel>
          <StyledInput
            type="password"
            className={passwordNotValid ? styles.invalid : undefined}
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
          />
        </p>

        <div className={styles.actions}>
          <button type="button" className={styles.textButton}>
            Create a new account
          </button>
          <button className={styles.button} onClick={handleLogin}>
            Sign In
          </button>
        </div>
      </StyledControls>
    </div>
  );
}
