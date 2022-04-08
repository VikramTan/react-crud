import axios from "axios";

import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function AddUser() {
  let history = useHistory();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  const { name, username, email, phone, website } = user;

  const onInputChange = e => {
    console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3004/users", user);
    history.push("/");
    console.log(onSubmit);
  };
  return (
    <form className="form-inline shadow p-5 " onSubmit={e => onSubmit(e)}>
      <div className="form-group mb-2">
        <label for="staticEmail2" className="sr-only">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          name="name"
          placeholder="Name"
          value={name}
          onChange={e => onInputChange(e)}
        />
      </div>
      <div className="form-group  mb-2">
        <label for="inputPassword2" className="sr-only">
          Username
        </label>
        <input
          type="text"
          className="form-control"
          name="username"
          placeholder="UserName"
          value={username}
          onChange={e => onInputChange(e)}
        />
      </div>
      <div className="form-group  mb-2">
        <label for="inputPassword2" className="sr-only">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          name="email"
          placeholder="email"
          value={email}
          onChange={e => onInputChange(e)}
        />
      </div>
      <div className="form-group  mb-2">
        <label for="inputPassword2" className="sr-only">
          Phone
        </label>
        <input
          type="text"
          className="form-control"
          name="phone"
          placeholder="Phone"
          value={phone}
          onChange={e => onInputChange(e)}
        />
      </div>
      <div className="form-group  mb-2">
        <label for="inputPassword2" className="sr-only">
          Web site
        </label>
        <input
          type="text"
          className="form-control"
          name="website"
          placeholder="Website"
          value={website}
          onChange={e => onInputChange(e)}
        />
      </div>
      <button className="btn btn-primary mb-2">Add</button>
    </form>
  );
}
