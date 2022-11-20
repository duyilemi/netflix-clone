import React from "react";
import { useRef } from "react";
import { auth } from "../firebase";
import "./SignUp.css";

function SignUp() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  function register(e) {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((newUser) => {})
      .catch((err) => alert(err.message));
  }

  function signIn(e) {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then()
      .catch((err) => alert(err.message));
  }

  return (
    <div className="signUp">
      <form action="">
        <h1>Sign In</h1>
        <input type="email" placeholder="Email Address" ref={emailRef} />
        <input
          type="password"
          name=""
          id=""
          placeholder="Password"
          ref={passwordRef}
        />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>

        <h4>
          <span className="signUp__gray">New to Netflix?</span>{" "}
          <span className="signUp__link" onClick={register}>
            Sign Up now
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignUp;
