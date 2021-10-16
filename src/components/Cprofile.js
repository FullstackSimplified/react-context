import React, { Component } from "react";
import { UserContext } from "../context/UserContext";
export class Cprofile extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {({ loading, user }) => {
          return (
            <>
              <h2> Class Component </h2>
              {loading && <p>Loading ...</p>}
              {user && (
                <div>
                  <p>Name: {user.name}</p>
                  <p>Email: {user.email}</p>
                  <p>Active: {user.isActive.toString()}</p>
                </div>
              )}
            </>
          );
        }}
      </UserContext.Consumer>
    );
  }
}

export default Cprofile;
