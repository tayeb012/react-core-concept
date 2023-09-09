import { useEffect, useState } from "react";
import User from "./User";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div style={{ border: "5px solid aqua", padding: "10px", margin: "20px" }}>
      <h2>User: {users.length}</h2>
      {
        users.map(user => <User user={user} ></User>)
      }
    </div>
  );
}
