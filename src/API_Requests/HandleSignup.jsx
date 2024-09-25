import HandleLogin from "./HandleLogin.jsx";

const HandleSignup = async (username, email, password) => {
    const data = {username, email, password};

    try {
        const response = await fetch('http://localhost:3000/api/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();

        if (response.ok) {
            const result = await HandleLogin(email, password);
            return {success: true, message: "Account created successfully!", accessToken: result.accessToken};
        } else {
            return {success: false, message: result.message || 'Signup failed!'};
        }
    } catch (error) {
        return {success: false, message: 'Error sending signup request.'};
    }
};

export default HandleSignup;
