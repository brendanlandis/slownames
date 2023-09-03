import axios from 'axios';
import Cookies from 'js-cookie';
const accessToken = Cookies.get('accessToken');

const submitNewBand = async (newBandName) => {
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
        return response.data;
    } catch (error) {
        throw error;
    }
};

export default submitNewBand;
