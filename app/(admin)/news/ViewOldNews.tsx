import React, { useState, useEffect } from 'react';
const axios = require('axios');
import Cookies from 'js-cookie';
const accessToken = Cookies.get('accessToken');

export default function ViewOldNews() {
    const [newsList, setnewsList] = useState<(string | number)[]>([]);

    // fetch data
    useEffect(() => {
        axios
            .get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/posts?populate=*`, {
                headers: {
                    Authorization: `bearer ${accessToken}`,
                },
            })
            .then(function (response) {
                console.log(response.data.data);
                setnewsList(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const grid = newsList.map((post) => (
        <>
            <div key={post.id}>{post}</div>
        </>
    ));

    return (
        <>
            <pre>{grid}</pre>
        </>
    );
}