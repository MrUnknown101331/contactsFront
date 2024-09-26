import styles from './AddCard.module.css'
import AddIcon from '@mui/icons-material/Add';
import {SvgIcon} from "@mui/material";
import {useEffect, useState} from "react";
import NewContact from "../NewContact/NewContact.jsx";
import PropTypes from "prop-types";
import AddContact from "../API_Requests/AddContact.jsx";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddCard(props) {
    const [showDialog, setShowDialog] = useState(false);
    const openDialog = () => {
        setShowDialog(true);
    }
    const closeDialog = () => {
        setShowDialog(false);
    }
    const submitted = async (contactData) => {
        const response = await AddContact(props.accessToken, contactData);
        if (response.success) {
            props.getContacts();
        }else{
         toast.error(response.message || 'Cannot Create Contact!')
        }
        closeDialog();
    }

    useEffect(() => {
        if (showDialog) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }
        return () => {
            document.body.classList.remove("no-scroll"); // Cleanup on unmount
        };
    }, [showDialog]);

    return (
        <>
            <div className={styles.add_card} onClick={openDialog}>
                <SvgIcon component={AddIcon}/>
            </div>
            <NewContact isOpen={showDialog} onSubmit={submitted} onClose={closeDialog}/>
            <ToastContainer/>
        </>
    );
}

AddCard.propTypes = {
    accessToken: PropTypes.string.isRequired,
    getContacts: PropTypes.func.isRequired
}

export default AddCard