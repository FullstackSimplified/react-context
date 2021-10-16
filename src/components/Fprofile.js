import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
const Fprofile = () => {
  const { user, loading, updateUserName } = useContext(UserContext);
  return (
    <div>
      <h2> Functional Component </h2>
      {loading && <p>Loading ...</p>}
      {user && (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Active: {user.isActive.toString()}</p>
        </div>
      )}

      <input
        type="name"
        onChange={(e) => {
          updateUserName(e.target.value);
        }}
        placeholder="Name"
      />
    </div>
  );
};

export default Fprofile;
