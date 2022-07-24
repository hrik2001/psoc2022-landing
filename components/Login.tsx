import React from "react";
import styles from "../styles/login.module.scss"

function Login() {
  return(
    <div className={styles.container}>
    <div className={styles.inputs}>
    {<form action="submit">
                  <input type="email" placeholder='Enter your Email' required />
                  <input type="password" placeholder='Enter your Password' required />
                  <button type="submit">Login</button>
                  </form>}
    </div>
    </div>
  );
}

export default Login;
