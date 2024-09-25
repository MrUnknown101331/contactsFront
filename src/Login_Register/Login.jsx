import styles from './Login.module.css'
import PropTypes from 'prop-types'
import {useEffect, useState} from "react";
import HandleLogin from "../API_Requests/HandleLogin.jsx";

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {SvgIcon} from "@mui/material";
import HandleSignup from "../API_Requests/HandleSignup.jsx";

function Login(props) {

    const [isPassVisible, setIsPassVisible] = useState(false);
    const togglePassVisible = () => {
        setIsPassVisible((current) => !current);
    }

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLoginSubmit = async (event) => {
        event.preventDefault(); // Prevents page refresh on form submission
        await HandleLogin(email, password);
    };

    const handleRegisterSubmit = async (event) => {
        event.preventDefault();
        await HandleSignup(username, email, password);
    }


    // eslint-disable-next-line react-hooks/exhaustive-deps
    const login = (
        <>
            <h1 className={styles.heading}>Log In</h1>
            <p className={styles.text}>Enter your username and password to login</p>
            <form className={styles.form_container} onSubmit={handleLoginSubmit}>
                <input type="text" className={styles.userInput} name="email" placeholder="Email" required
                       onChange={(e) => setEmail(e.target.value)}/>
                <div className={styles.passBox}>
                    <input type={isPassVisible ? 'text' : 'password'} className={styles.passField} name="password"
                           placeholder="Pasword" required
                           onChange={(e) => setPassword(e.target.value)}/>
                    <SvgIcon className={styles.visibleIcon}
                             component={isPassVisible ? VisibilityOffIcon : VisibilityIcon}
                             onClick={togglePassVisible}/>
                </div>
                <button type="submit" className={styles.button}>log in</button>
            </form>
        </>
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const signup = (
        <>
            <h1 className={styles.heading}>Create Account</h1>
            <p className={styles.text}>use your email for registeration</p>
            <form className={styles.form_container} onSubmit={handleRegisterSubmit}>
                <input type="text" className={styles.userInput} name="username" placeholder="Username" required
                       onChange={(e) => setUsername(e.target.value)}/>
                <input type="text" className={styles.userInput} name="email" placeholder="Email" required
                       onChange={(e) => setEmail(e.target.value)}/>
                <div className={styles.passBox}>
                    <input type={isPassVisible ? 'text' : 'password'} className={styles.passField} name="password"
                           placeholder="Pasword" required
                           onChange={(e) => setPassword(e.target.value)}/>
                    <SvgIcon className={styles.visibleIcon}
                             component={isPassVisible ? VisibilityOffIcon : VisibilityIcon}
                             onClick={togglePassVisible}/>
                </div>
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