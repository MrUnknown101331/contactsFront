import styles from './Login.module.css'
import PropTypes from 'prop-types'
import {useEffect, useState} from "react";

function Login(props) {

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const login = (
        <>
            <h1 className={styles.heading}>Log In</h1>
            <p className={styles.text}>Enter your username and password to login</p>
            <form className={styles.form_container}>
                <input type="text" className={styles.userInput} name="email" placeholder="Email" required/>
                <input type="password" className={styles.userInput} name="password" placeholder="Pasword" required/>
                <button type="submit" className={styles.button}>log in</button>
            </form>
        </>
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const signup = (
        <>
            <h1 className={styles.heading}>Create Account</h1>
            <p className={styles.text}>use your email for registeration</p>
            <form className={styles.form_container}>
                <input type="text" className={styles.userInput} name="username" placeholder="Username" required/>
                <input type="text" className={styles.userInput} name="email" placeholder="Email" required/>
                <input type="password" className={styles.userInput} name="password" placeholder="Pasword" required/>
                <button type="submit" className={styles.button}>sign up</button>
            </form>
        </>
    );

    const [current, setCurrent] = useState(login);
    useEffect(() => {
        setTimeout(() => {
            setCurrent(props.signUp ? signup : login);
        }, 250)
    }, [login, props.signUp, signup]);

    return (
        <div className={`${styles.login_container} ${props.signUp ? styles.toggle_right : ' '}`}>
            {current}
        </div>
    );
}

Login.propTypes = {
    signUp: PropTypes.bool.isRequired
}


export default Login;