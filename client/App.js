import React from "react";
import User from "./Components/User/User";
import CreateUserForm from "./Components/User/CreateUserForm";
import Item from "./Components/Item/Item";

export const App = () => {
  return (
    <div>
      <User />
      <CreateUserForm />
      <Item />
    </div>
  );
};
