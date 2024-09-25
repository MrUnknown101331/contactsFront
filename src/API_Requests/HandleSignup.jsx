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
            console.log(`Account created successfully. User ID: ${result._id}`);
            await HandleLogin(email, password);
        } else {
            console.error('Signup failed:', result.message);
        }
    } catch (error) {
        console.error('Error sending POST request:', error);
    }
};

export default HandleSignup;

/*
POST http://localhost:3000/api/users/register
Content-Type: application/json

{
  "username": "MyUserName2",
  "email": "mysecondmail@nomail.com",
  "password": "Very-Strong-Password"
}
*/
