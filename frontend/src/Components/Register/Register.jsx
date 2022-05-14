import React,{useState} from 'react';
import styles from './Register.module.css';
import { useNavigate } from 'react-router-dom';


function Register() {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
  }

  return (
    <>
      <form action="" className={styles.form} >
        <label htmlFor="name">Name</label>
        <input id="name" type="text" onChange={e => setName(e.target.value)}/>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" onChange={e => setEmail(e.target.value)}/>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" onChange={e => setUsername(e.target.value)} />
        <label htmlFor="password">Password</label>
        <input id="password" type="text" onChange={e => setPassword(e.target.value)}/>
        <input type="submit" value="Register" className="btn btn-primary" />
      </form>
    </>
  )
}

export default Register;