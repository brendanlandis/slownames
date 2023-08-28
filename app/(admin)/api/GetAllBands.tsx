'use client';
import axios from 'axios';
import Cookies from 'js-cookie';
const accessToken = Cookies.get('accessToken');
import { useQuery } from '@tanstack/react-query';
import { Band } from '../../types';

export default function GetAllBands(): Band[] {
    const { isLoading, isError, data, error } = useQuery<any[], Error>({
        queryKey: ['allBands'],
        queryFn: () =>
            axios
                .get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/bands`, {
                    headers: {
                        Authorization: `bearer ${accessToken}`,
                    },
                })
                .then((res) => res.data.data),
    });

    if (isLoading || isError) {
        return [];
    }

    if (isError) {
        console.log(error);
        return [];
    }

    // transform data
    const updatedBandArray: Band[] = data.map((band) => ({
        id: band.id,
        bandname: band.attributes.name,
        selected: false,
    }));

    return updatedBandArray;
}
