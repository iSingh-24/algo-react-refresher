import React, { useState } from "react";

const User = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <div>{`User's first name is ${firstName} and User's last name is ${lastName}`}</div>
  );
};

export default User;
