const AddContact = async (accessToken, data) => {
    try {
        const response = await fetch('http://localhost:3000/api/contacts', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            const result = await response.json();
            return {success: true, data: result};
        } else {
            const errorResult = await response.json();
            return {success: false, message: errorResult.message || 'Cannot Create Contact'};
        }
        // eslint-disable-next-line no-unused-vars
    } catch (error) {
        return {success: false, message: 'Error Creating Contact.'};
    }
};

export default AddContact;

/*
POST http://localhost:3000/api/contacts
Content-Type: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiTXlVc2VyTmFtZTIiLCJlbWFpbCI6Im15c2Vjb25kbWFpbEBub21haWwuY29tIiwiaWQiOiI2NmY1NzQ4NjVhYjUyNDM5MzM0Mjc0NGQifSwiaWF0IjoxNzI3MzYyMjAwLCJleHAiOjE3MjczNjQwMDB9.GoilrXe9G3jcmgV0aTRXMibN7v4RB_tTFla9b5no6v8

{
  "name": "MyZName",
  "email": "myzmail@nomail.com",
  "phone": "9714794348"
}
 */
