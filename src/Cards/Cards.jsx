import styles from './Cards.module.css'
import PropTypes from "prop-types";

function Cards(props) {
    return (
        <div className={styles.contact_card}>
            <h3>{props.username}</h3>
            <p>Email: {props.email}</p>
            <p>Phone: {props.phone}</p>
        </div>
    );
}

Cards.propTypes = {
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired
}

export default Cards