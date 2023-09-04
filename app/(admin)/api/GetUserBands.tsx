import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Cookies from 'js-cookie';
const accessToken = Cookies.get('accessToken');
import { Band } from '@/app/types';

const fetchBands = async () => {
    try {
        const response = await axios.get(
            `${process.env.NEXT_PUBLIC_STRAPI_URL}/users/me/?populate=*`,
            {
                headers: {
                    Authorization: `bearer ${accessToken}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

const transformBandsData = (data) => {
    const transformedBandsArray: Band[] = data.otherbands.map((band) => ({
        id: band.id,
        bandname: band.bandname,
        selected: false,
    }));
    const mainBand: Band = {
        id: data.mainband.id,
        bandname: data.mainband.bandname,
        selected: true,
    };
    transformedBandsArray.unshift(mainBand);
    return transformedBandsArray;
};

const GetUserBands = () => {
    const { data, ...rest } = useQuery(['bandsArray'], fetchBands);
    const transformedData = data ? transformBandsData(data) : [];
    return {
        data: transformedData,
        ...rest,
    };
};

export default GetUserBands;
