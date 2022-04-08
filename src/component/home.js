import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3004/users");
    console.log("data", result);
    setUsers(result.data);
  };

  const deleteuser = async id => {
    await axios.delete(`http://localhost:3004/users/${id}`);
    loadUsers();
    //loaduser isliye call kra taki refres hoje data ko fir se loadkre
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <table class="table border shadow p-5">
            <thead class="thead-dark">
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">username</th>
                <th scope="col">email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <Link class="btn btn-primary" to={`/users/${user.id}`}>
                      View
                    </Link>
                    &nbsp;
                    <Link
                      to={`/users/edit/${user.id}`}
                      class="btn btn-outline-primary"
                    >
                      Edit
                    </Link>
                    &nbsp;
                    <Link
                      class="btn btn-danger"
                      onClick={() => deleteuser(user.id)}
                    >
                      Delete
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
