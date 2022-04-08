import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

export default function UserDetails() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });
  const { id } = useParams();

  useEffect(() => {
    loadusers();
  }, []);

  const loadusers = async () => {
    const res = await axios.get(`http://localhost:3004/users/${id}`);
    setUser(res.data);
  };
  return (
    <div className="container">
      <h2>User:{id}</h2>
      <ul>
        <li>name:{user.name}</li>
        <li>username:{user.username}</li>
        <li>Email:{user.email}</li>
        <li>Phone:{user.phone}</li>
        <li>Website:{user.website}</li>
      </ul>
    </div>
  );
}
