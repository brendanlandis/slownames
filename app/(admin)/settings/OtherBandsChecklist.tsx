'use client';
import React, { useState, useEffect } from 'react';
const axios = require('axios');
import Cookies from 'js-cookie';
const accessToken = Cookies.get('accessToken');

type Band = {
    id: number;
    bandname: string;
    selected: boolean;
};

export default function OtherBandsChecklist() {
    const [bandArray, setBandArray] = useState<Band[]>([]);

    // fetch the data
    useEffect(() => {
        let reqSelectedBands = axios.get(
            `${process.env.NEXT_PUBLIC_STRAPI_URL}/users/me?populate=*`,
            {
                headers: {
                    Authorization: `bearer ${accessToken}`,
                },
            }
        );
        let reqAllBands = axios.get(
            `${process.env.NEXT_PUBLIC_STRAPI_URL}/artists`,
            {
                headers: {
                    Authorization: `bearer ${accessToken}`,
                },
            }
        );

        axios
            .all([reqSelectedBands, reqAllBands])
            .then(
                axios.spread((resSelectedBands, resAllBands) => {
                    const selectedBands = resSelectedBands.data.otherbands;
                    const allBands = resAllBands.data.data;

                    // get IDs of bands that will be selected
                    let bandIds: number[] = [];
                    selectedBands.map((band) => {
                        bandIds.push(band.id);
                    });

                    // add artists to bandArray
                    const updatedBandArray: Band[] = [];
                    resAllBands.data.data.map((band) => {
                        let newBand: Band = {
                            id: band.id,
                            bandname: band.attributes.name,
                            selected: false,
                        };
                        updatedBandArray.push(newBand);
                    });

                    // set whether each band is selected
                    bandIds.map((id) => {
                        const bandToUpdate = updatedBandArray.find(
                            (band) => band.id === id
                        );
                        if (bandToUpdate) {
                            bandToUpdate.selected = true;
                        }
                    });

                    // alphabetize the list
                    const sortedBandArray = [...updatedBandArray].sort((a, b) =>
                        a.bandname.localeCompare(b.bandname)
                    );
                    setBandArray(sortedBandArray);
                })
            )
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const checkboxList = bandArray.map((band) => (
        <div key={band.id} className="checkbox-wrapper">
            <input
                type="checkbox"
                id={'artist-' + band.id}
                name={'artist-' + band.id}
                checked={band.selected}
                onChange={() => {
                    const updatedBandArray = bandArray.map((b) =>
                        b.id === band.id ? { ...b, selected: !b.selected } : b
                    );
                    setBandArray(updatedBandArray);
                }}
            />
            <label htmlFor={'artist-' + band.id} className="">
                {band.bandname}
            </label>
        </div>
    ));

    return (
        <fieldset>
            <legend className="hidden">Check all the bands you're in:</legend>
            {checkboxList}
        </fieldset>
    );
}
