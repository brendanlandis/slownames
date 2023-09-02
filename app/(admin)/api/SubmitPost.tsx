import axios from 'axios';
import Cookies from 'js-cookie';
const accessToken = Cookies.get('accessToken');
import format from 'date-fns/format';

const submitPost = async (formData, postBandObj) => {
    try {
        const formattedDate = format(formData.date, 'yyyy-MM-dd');
        const response = await axios.post(
            `${process.env.NEXT_PUBLIC_STRAPI_URL}/posts`,
            JSON.stringify({
                data: {
                    ...formData,
                    date: formattedDate,
                    bands: [postBandObj && postBandObj.selectedBand],
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

export default submitPost;
