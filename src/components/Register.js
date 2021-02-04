import React, { useState } from "react";
function Register(props) {
  const redirect = e => {
    props.history.push("/login");
  };

  return (
    <>
      <h1> from Register </h1>
      <button type="button" onClick={redirect}>
        redirect
      </button>
    </>
  );
}

export default Register;
