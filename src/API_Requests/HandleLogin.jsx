const HandleLogin = async (email, password) => {
    const data = {email, password};

    try {
        const response = await fetch('http://localhost:3000/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            const result = await response.json();
            console.log('Login successful!');
            console.log(`Access token received: ${result.accessToken}`);
        } else {
            const errorResult = await response.json();
            console.warn(`Login failed: ${errorResult.message || 'Unknown error'}`);
        }
    } catch (error) {
        console.error('Error sending POST request:', error);
        console.log('Error sending data');
    }
};

export default HandleLogin;

/*
POST http://localhost:3000/api/users/login
    Content-Type: application/json

{
    "email": "mymail@nomail.com",
    "password": "Very-Strong-Password"
}
*/
