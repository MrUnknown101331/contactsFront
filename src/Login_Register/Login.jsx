import styles from './Login.module.css'
import PropTypes from 'prop-types'

function Login(props) {

    const login = (
        <div className={styles.login_container}>
            <h1 className={styles.heading}>Log In</h1>
            <p className={styles.text}>Enter your username and password to login</p>
            <form className={styles.form_container}>
                <input type="text" className={styles.userInput} name="email" placeholder="Email" required/>
                <input type="password" className={styles.userInput} name="password" placeholder="Pasword" required/>
                <button type="submit" className={styles.button}>log in</button>
            </form>
        </div>
    );

    const signup = (
        <div className={`${styles.login_container} ${styles.toggle_right}`}>
            <h1 className={styles.heading}>Create Account</h1>
            <p className={styles.text}>use your email for registeration</p>
            <form className={styles.form_container}>
                <input type="text" className={styles.userInput} name="username" placeholder="Username" required/>
                <input type="text" className={styles.userInput} name="email" placeholder="Email" required/>
                <input type="password" className={styles.userInput} name="password" placeholder="Pasword" required/>
                <button type="submit" className={styles.button}>sign up</button>
            </form>
        </div>
    );

    return (props.signUp ? signup : login);
}

Login.propTypes = {
    signUp: PropTypes.bool.isRequired
}


export default Login;