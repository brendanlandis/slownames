const axios = require('axios');
import Cookies from 'js-cookie';
const accessToken = Cookies.get('accessToken');

export default function User() {
    axios({
        method: 'GET',
        url: `${process.env.NEXT_PUBLIC_STRAPI_URL}/users/me?populate=*`,
        headers: {
            Authorization: `bearer ${accessToken}`,
        },
    });
    return <>hi</>;
}
