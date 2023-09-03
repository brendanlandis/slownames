'use client';
import axios from 'axios';
import Cookies from 'js-cookie';
const accessToken = Cookies.get('accessToken');
import { QueryClient, useQuery } from '@tanstack/react-query';
import { User } from '../../types';

export default function GetHumanName({ onUserData }) {
    const { isLoading, isError, data, error } = useQuery<User, Error>({
        queryKey: ['user'],
        queryFn: () =>
            axios
                .get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/users/me`, {
                    headers: {
                        Authorization: `bearer ${accessToken}`,
                    },
                })
                .then((res) => res.data),
    });

    if (isLoading) {
        return <>loading...</>;
    }

    if (isError) {
        return <>{error.message}</>;
    }

    if (!isLoading && !isError) {
        onUserData(data.username, data.id);
    }

    return (
        <>
            should have worked
        </>
    );
}
