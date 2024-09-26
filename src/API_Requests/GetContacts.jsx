const GetAbout = async (accessToken) => {
    try {
        const response = await fetch('http://localhost:3000/api/contacts', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            }
        });

        if (response.ok) {
            const result = await response.json();
            return {success: true, data: result};
        } else {
            const errorResult = await response.json();
            return {success: false, message: errorResult.message || 'No data Found!'};
        }
        // eslint-disable-next-line no-unused-vars
    } catch (error) {
        return {success: false, message: 'Error Getting contacts.'};
    }
};

export default GetAbout;

/*
GET http://localhost:3000/api/contacts
Authorization: Bearer accessToken
 */
