import Login from './Login.jsx';
import Side from './Side.jsx'
import styles from './RegisterLogin.module.css';
import {useState} from "react";

function RegisterLogin() {

    const [signUp, setSignUp] = useState(false);

    const toggleSignUp = () => {
        setSignUp((current) => !current);
    }

    return (
        <div className={styles.outer}>
            <div className={styles.card}>
                <Login signUp={signUp}/>
                <Side signUp={signUp} toggleSignUp={toggleSignUp}/>
            </div>
        </div>
    )
}

export default RegisterLogin;