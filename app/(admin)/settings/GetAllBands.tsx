import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Cookies from 'js-cookie';
const accessToken = Cookies.get('accessToken');
import { Band } from '@/app/types';

const fetchAllBands = async () => {
    try {
        const response = await axios.get(
            `${process.env.NEXT_PUBLIC_STRAPI_URL}/bands?populate=*&sort=bandname:asc&pagination[pageSize]=500`,
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

const filterBandsData = (data, userId) => {
    const filteredBandsData: Band[] = data.data.map((band) => ({
        id: band.id,
        bandname: band.attributes.bandname,
        selected: false,
        users: [
            ...(band.attributes.user.data?.map((user) => user.id) || []),
            ...(band.attributes.users.data?.map((user) => user.id) || []),
        ],
    }));

    filteredBandsData.forEach((band) => {
        if (band.users.includes(userId)) {
            band.selected = true;
        }
    });

    return filteredBandsData;
};

const GetAllBands = (userId) => {
    const { data, ...rest } = useQuery({queryKey: ['allbands'], queryFn: fetchAllBands});
    const filteredData = data ? filterBandsData(data, userId) : [];
    return {
        data: filteredData,
        ...rest,
    };
};

export default GetAllBands;
