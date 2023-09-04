import axios from 'axios';
import Cookies from 'js-cookie';
const accessToken = Cookies.get('accessToken');

const SubmitNewBand = async (newBandName, userId) => {

    try {
        const response = await axios.post(
            `${process.env.NEXT_PUBLIC_STRAPI_URL}/bands`,
            JSON.stringify({
                data: {
                    bandname: newBandName,
                },
            }),
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `bearer ${accessToken}`,
                },
            }
        );

        if (response.status === 200) {
            const bandId = response.data.data.id;
            const userResponse = await axios.put(
                `${process.env.NEXT_PUBLIC_STRAPI_URL}/bands/${bandId}`,
                JSON.stringify({
                    data: {
                        users: userId,
                    },
                }),
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `bearer ${accessToken}`,
                    },
                }
            );

            if (userResponse.status === 200) {
                return response.data;
            } else {
                throw new Error("fuck the association didn't work");
            }
        } else {
            throw new Error("Dangit didn't create new band");
        }
    } catch (error) {
        throw error;
    }
};

export default SubmitNewBand;
