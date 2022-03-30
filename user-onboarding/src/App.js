import React, { useState, useEffect} from 'react';
import UserForm from './form';
import User from './user';

import axios from 'axios';
import * as yup from 'yup';
import formSchema from './formSchema';

import './App.css';

const initialFormValues = {
  username: '',
  email: '',
  password: '',
  tos: false,
}

const initialFormErrors = {
  username: '',
  email: '',
  password: '',
}

const initialUsers = []
const initialDisabled = true


export default function App() {
  const [users, setUsers] = useState(initialUsers)          
  const [formValues, setFormValues] = useState(initialFormValues) 
  const [formErrors, setFormErrors] = useState(initialFormErrors) 
  const [disabled, setDisabled] = useState(initialDisabled)

  const postNewUser = newUser => {
    axios.post("https://reqres.in/api/users", newUser)
    .then(res => {
      setUsers([res.data, ...users]);
    })
    .catch(err => console.error(err))
    .finally(() => setFormValues(initialFormValues))
  }

  const validate = (name, value) => {
    yup.reach(formSchema, name)
    .validate(value)
        .then(() => setFormErrors({ ...formErrors, [name]: "" }))
        .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
  }

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const formSubmit = () => {
    const newUser = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
    }
    postNewUser(newUser);
  }

  useEffect(() => {
    formSchema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div className='container'>
      <header><h1>User sign up</h1></header>
      
      <UserForm
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />

      {
        users.map(user => {
          return (
            <User key={user.id} details={user} />
          )
        })
      }
    </div>
  )
}


