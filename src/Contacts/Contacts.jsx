import styles from './Contacts.module.css'
import Cards from "../Cards/Cards.jsx";
import AddCard from "../Cards/AddCard.jsx";
import RefreshIcon from '@mui/icons-material/Refresh';
import {SvgIcon} from "@mui/material";
import PropTypes from "prop-types";
import {useEffect, useState} from "react";
import GetAbout from "../API_Requests/GetAbout.jsx";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GetContacts from "../API_Requests/GetContacts.jsx";


function Contacts(props) {

    const logout = () => {
        props.setIsLoggedIn(false);
    }

    const [user, setUser] = useState("");

    const getUser = async () => {
        const response = await GetAbout(props.accessToken);
        if (response.success) {
            setUser(response.data.username);
        } else {
            toast.error(response.message || 'Error Fetching Data!')
        }
    }

    const [contacts, setContacts] = useState([]);
    const getContacts = async () => {
        const response = await GetContacts(props.accessToken);
        if (response.success) {
            setContacts(response.data);
        } else {
            toast.error(response.message || 'Error Fetching Contacts!')
        }
    }

    useEffect(() => {
        getUser();
        getContacts();
    }, []);


    return (
        <>
            <header className={styles.header}>
                <h1 className={styles.title}>Contact Manager</h1>
                <div className={styles.right_div}>
                    <p className={styles.hello_text}>Hello, {user}</p>
                    <button className={styles.logout_btn} onClick={logout}>Logout</button>
                </div>
            </header>
            <section className={styles.body}>
                <div className={styles.top}>
                    <h2 className={styles.my_contacts}>My Contacts</h2>
                    <SvgIcon component={RefreshIcon} className={styles.refresh_btn} onClick={getContacts}/>
                </div>
                <div className={styles.card_holder}>
                    {
                        contacts.map((entry) => (
                            <Cards key={entry._id} username={entry.name} email={entry.email} phone={entry.phone}/>
                        ))
                    }
                    <AddCard accessToken={props.accessToken} getContacts={getContacts}/>
                </div>
            </section>
            <ToastContainer/>
        </>
    );
}

Contacts.propTypes = {
    accessToken: PropTypes.string.isRequired,
    setIsLoggedIn: PropTypes.func.isRequired
}

export default Contacts;