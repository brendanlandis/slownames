'use client';
import useAxios from 'axios-hooks';
import Cookies from 'js-cookie';
const accessToken = Cookies.get('accessToken');

export default function GetHumanName() {
    const [{ data, loading, error }] = useAxios({
        url: `${process.env.NEXT_PUBLIC_STRAPI_URL}/users/me`,
        headers: { Authorization: `bearer ${accessToken}` },
    });

    if (loading) {
        return <>[loading]</>;
    }

    if (error) {
        return <>[error: bummer]</>;
    }

    return <>{data.username}</>;
}
