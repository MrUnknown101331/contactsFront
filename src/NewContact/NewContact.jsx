import {useState} from 'react';
import styles from './NewContact.module.css'
import PropTypes from "prop-types";

function NewContact(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {name, email, phone};
        props.onSubmit(formData);
        props.onClose();
    };

    if (!props.isOpen) {
        return null;
    }

    return (
        <>
            <div className={styles.background_cover} onClick={props.onClose}/>
            <div className={styles.container}>
                <p className={styles.info}>Please fill all the information of Contact.</p>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <input type='text' name='name' placeholder='Name' required className={styles.contact_input}
                           onChange={(e) => setName(e.target.value)}/>
                    <input type='text' name='email' placeholder='Email' required className={styles.contact_input}
                           onChange={(e) => setEmail(e.target.value)}/>
                    <input type='text' name='phone' placeholder='Phone' required className={styles.contact_input}
                           onChange={(e) => setPhone(e.target.value)}/>
                    <button className={styles.submit_button}>Submit</button>
                </form>
            </div>
        </>
    );
}

NewContact.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired
}

export default NewContact;
