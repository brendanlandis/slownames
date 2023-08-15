'use client';
import useAxios from 'axios-hooks';
import Cookies from 'js-cookie';

const accessToken = Cookies.get('accessToken');

export function GetHumanName() {
    const [{ data, loading, error }] = useAxios({
        url: `${process.env.NEXT_PUBLIC_STRAPI_URL}/users/me`,
        headers: { Authorization: `bearer ${accessToken}` },
    });
    return (
        <>
            {loading && <>loading name...</>}
            {!!error && <>no name {error.response?.data.error.message}</>}
            {!!data && <>{data.username}</>}
        </>
    );
}

export function GetMainBand(id, name) {
    const [{ data, loading, error }] = useAxios({
        url: `${process.env.NEXT_PUBLIC_STRAPI_URL}/users/me?populate=*`,
        headers: { Authorization: `bearer ${accessToken}` },
    });
    if (error) {
        console.log(error);
    }
    return (
        <>
            {loading && <>loading main band...</>}
            {!!error && <>{error.response?.data.error.message}</>}
            {!!data && (
                <>
                    <option key={data.mainband.id} value={data.mainband.id}>
                        {data.mainband.name}
                    </option>
                </>
            )}
        </>
    );
}
