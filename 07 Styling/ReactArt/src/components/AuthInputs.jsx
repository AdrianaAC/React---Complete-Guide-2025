import { useState } from "react";
import styles from "./AuthInputs.module.css";
import StyledButton from "./StyledButton";
import { styled } from "styled-components";
import CustomStyledInput from "./StyledInput";

const StyledControls = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
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
        <CustomStyledInput
          label="Email"
          type="email"
          invalid={emailNotValid}
          onChange={(event) => handleInputChange("email", event.target.value)}
        />
        <CustomStyledInput
          label="Password"
          type="password"
          invalid={passwordNotValid}
          onChange={(event) =>
            handleInputChange("password", event.target.value)
          }
        />
        <div className={styles.actions}>
          <button type="button" className={styles.textButton}>
            Create a new account
          </button>
          <StyledButton onClick={handleLogin}>Sign In</StyledButton>
        </div>
      </StyledControls>
    </div>
  );
}
