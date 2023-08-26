'use client';
import React, { useState, useEffect } from 'react';
const axios = require('axios');
import Cookies from 'js-cookie';
const accessToken = Cookies.get('accessToken');

type Band = {
    id: number;
    bandname: string;
};

export default function MainBandDropdown() {
    const [userBands, setUserBands] = useState<Band[]>([]);

    // fetch data
    useEffect(() => {
        axios
            .get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/users/me?populate=*`, {
                headers: {
                    Authorization: `bearer ${accessToken}`,
                },
            })
            .then(function (response) {
                const updatedUserBands: Band[] = [];
                response.data.otherbands
                    .filter((band) => band.id != response.data.mainband.id)
                    .map((band) => {
                        let newBand: Band = {
                            id: band.id,
                            bandname: band.name,
                        };
                        updatedUserBands.push(newBand);
                    });
                const sortedUserBands = [...updatedUserBands].sort((a, b) =>
                    a.bandname.localeCompare(b.bandname)
                );
                let mainBand: Band = {
                    id: response.data.mainband.id,
                    bandname: response.data.mainband.name,
                };
                sortedUserBands.unshift(mainBand);
                setUserBands(sortedUserBands);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const dropdownList = userBands.map((band) => (
        <option key={band.id} value={band.id}>
            {band.bandname}
        </option>
    ));

    return (
        <>
            <select defaultValue="0" id="mainBand">
                {dropdownList}
            </select>
        </>
    );
}
