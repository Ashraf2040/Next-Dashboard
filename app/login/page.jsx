
"use client"
import { authenticate } from "../lib/actions";
import styles from "./login.module.css"

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form} action={authenticate}>

        <h2>Log In</h2>
        
        <input type="text" placeholder="username"  name="username"/>
        <input type="password"  placeholder="password" name="password"/>
      <button className={styles.button}>Login</button>
     </form>
    </div>
  )
};

export default LoginPage
