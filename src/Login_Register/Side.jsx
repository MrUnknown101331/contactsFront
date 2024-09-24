import styles from './Side.module.css'
import PropTypes from "prop-types";

function Side(props) {

    const login = (
        <div className={styles.side}>
            <h1 className={styles.heading}>Hello, Friend!</h1>
            <p className={styles.text}>Register with your personal details to use all of site features</p>
            <button className={styles.button} onClick={props.toggleSignUp}>Sign up</button>
        </div>
    );

    const signup = (
        <div className={`${styles.side} ${styles.toggle_left}`}>
            <h1 className={styles.heading}>Welcome Back!</h1>
            <p className={styles.text}>Enter your personal details to use all of site features</p>
            <button className={styles.button} onClick={props.toggleSignUp}>Log in</button>
        </div>
    );

    return (props.signUp ? signup : login);
}

Side.propTypes = {
    signUp: PropTypes.bool.isRequired,
    toggleSignUp: PropTypes.func.isRequired
}

export default Side;