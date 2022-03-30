import React from "react";

export default function UserForm(props) {
  const { values, submit, change, disabled, errors } = props;

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

        <button disabled={disabled}>submit</button>

        <div className="errors">
          <div>{errors.username}</div>
          <div>{errors.email}</div>
          <div>{errors.password}</div>
        </div>
      </div>

      <div className="form-group inputs">
        <h4>General information</h4>

        <label>
          Username&nbsp;
          <input
            value={values.username}
            onChange={onChange}
            name="username"
            type="text"
          />
        </label>

        <label>
          Email
          <input
            value={values.email}
            onChange={onChange}
            name="email"
            type="text"
          />
        </label>

        <label>
          password
          <input
            value={values.password}
            onChange={onChange}
            name="password"
            type="password"
          />
        </label>

        <label>
          Terms Of Service
          <input
            type="checkbox"
            name="Terms Of Service"
            onChange={onChange}
            checked={values.tos}
          />
        </label>
      </div>
    </form>
  )
}
