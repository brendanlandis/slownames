import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Cookies from 'js-cookie';
const accessToken = Cookies.get('accessToken');
import { Press } from '@/app/types';
import { useSelectedBand } from '../api/SelectedBandContext';

const fetchPress = async () => {
    try {
        const response = await axios.get(
            `${process.env.NEXT_PUBLIC_STRAPI_URL}/press?populate=bands&sort=date:desc&pagination[pageSize]=500`,
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

const filterPressData = (data, selectedBand) => {
    const filteredPressData: Press[] = data.data.map((press) => ({
        id: press.id,
        date: press.attributes.date,
        headline: press.attributes.headline,
        text: press.attributes.text,
        bands: press.attributes.bands.data.map((band) => ({
            id: band.id,
            bandname: band.attributes.bandname,
        })),
    }));

    const filteredPressForTargetBand: Press[] = filteredPressData.filter((press) =>
        press.bands.some((band) => band.id === selectedBand)
    );

    return filteredPressForTargetBand;
};

const GetPress = () => {
    // const { data, ...rest } = useQuery(['press'], fetchPress);
    // const { selectedBand } = useSelectedBand();
    // const filteredData = data ? filterPressData(data, selectedBand) : [];
    return {
        // data: filteredData,
        // ...rest,
    };
};

export default GetPress;
