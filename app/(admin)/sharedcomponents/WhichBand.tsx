import { useState, useEffect } from 'react';
import { Band } from '@/app/types';

import axios from 'axios';
import Cookies from 'js-cookie';
const accessToken = Cookies.get('accessToken');
import { useQuery } from '@tanstack/react-query';

export default function WhichBand() {
    const [userBands, setUserBands] = useState<Band[]>([]);

    // const { isLoading, isError, data, error } = useQuery<any[], Error>({
    //     queryKey: ['userBandsz'],
    //     queryFn: () =>
    //         axios
    //             .get(
    //                 `${process.env.NEXT_PUBLIC_STRAPI_URL}/users/me/?populate=*`,
    //                 {
    //                     headers: {
    //                         Authorization: `bearer ${accessToken}`,
    //                     },
    //                 }
    //             )
    //             .then((res) => res.data),
    // });

    // if (isLoading) {
    //     return <>loading...</>;
    // }

    // if (isError) {
    //     return <>{error.message}</>;
    // }

    useEffect(() => {
        const newBandArray: Band[] = [
            { id: 3, bandname: 'Anura', selected: true },
            { id: 4, bandname: 'Big Hiatus', selected: true },
            { id: 9, bandname: 'Brendan Landis', selected: false },
            { id: 5, bandname: 'Esther Chlorine', selected: true },
            { id: 10, bandname: 'Star Card', selected: true },
        ];

        const selectedBands = newBandArray.filter(band => band.selected);

        setUserBands(selectedBands);
    }, []);

    return (
        <>
            <label className="hidden" htmlFor="news-form-band">
                what band is this for?
            </label>
            <select defaultValue="0" id="news-form-band">
                {userBands.map((band) => (
                    <option key={band.id} value={band.id}>
                        {band.bandname}
                    </option>
                ))}
            </select>
        </>
    );
}
