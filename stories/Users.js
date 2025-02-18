import React, { useEffect, useState } from "react";
import { Header } from "./Header";

import "./users.css";

export const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/users")
      .then((response) => response.json())
      .then((data) => {
        if (data.users) setUsers(data.users);
      });
  }, []);

  return (
    <article>
      <Header />
      <section>
        <h3>Seeding data in a story</h3>
        <div className="users-container">
          <p>
            This is an example list of users created via the factorySeeds
            property in the Users story component. The first two receive
            specific properties for the name, the rest have names that are
            automatically generated by the user factory defined in the
            makeServer function
          </p>
          <ul>
            {users.map((user) => (
              <li key={user.id}>Name: {user.name}</li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  );
};
