import React, { useState } from "react";

export default function UserForm(props) {
  const { values, submit, change, disabled, errors } = props;
  const { username, email, password, tos } = props.values;

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  const onChange = (evt) => {
    const { name, value, checked, type } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  };

  return (
    <form className="form container" onSubmit={onSubmit}>
      <div className="form-group submit">
        <h2>Add a user</h2>

        <div className="errors">
          <div>{errors.username}</div>
          <div>{errors.email}</div>
          <div>{errors.password}</div>
          <div>{errors.tos}</div>
        </div>
      </div>

      <div className="form-group inputs">
        <h4>General User Information</h4>

        <label>
          Username&nbsp;
          <input
            value={username}
            onChange={onChange}
            name="username"
            type="text"
          />
        </label>

        <label>
          Email
          <input
            value={email}
            onChange={onChange}
            name="email"
            type="text"
          />
        </label>

        <label>
          password
          <input
            value={password}
            onChange={onChange}
            name="password"
            type="password"
          />
        </label>

        <label>Terms of Service:
            <input
                type="checkbox"
                name="tos"
                checked={tos}
                onChange={onChange}
            />
        </label>
        <input id='submitBtn' type="submit" value="create a friend" disabled={disabled} />
      </div>
    </form>
  );
}
