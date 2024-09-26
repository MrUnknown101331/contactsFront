import {useState, useEffect} from "react";
import RegisterLogin from "./Login_Register/RegisterLogin.jsx";
import Contacts from "./Contacts/Contacts.jsx";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(
        () => sessionStorage.getItem("isLoggedIn") === "true" || false
    );
    const [accessToken, setAccessToken] = useState(
        () => sessionStorage.getItem("accessToken") || ''
    );

    useEffect(() => {
        sessionStorage.setItem("isLoggedIn", isLoggedIn);
        sessionStorage.setItem("accessToken", accessToken);
    }, [isLoggedIn, accessToken]);

    return (
        isLoggedIn ?
            <Contacts accessToken={accessToken} setIsLoggedIn={setIsLoggedIn}/> :
            <RegisterLogin setIsLoggedIn={setIsLoggedIn} setAccessToken={setAccessToken}/>
    );
}

export default App;
