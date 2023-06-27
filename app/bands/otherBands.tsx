'use client';
import * as React from 'react';
import { TextField } from '@mui/material';
import { Autocomplete } from '@mui/material';

async function getArtists() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/artists`);
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}

export default async function OtherBands() {
    const artists = await getArtists();

    const artistsList: string[] = [];

    artists.data.map((artist) => {
        let name = artist.attributes.name;
        artistsList.push(name);
    });

    return (
        <>
            <Autocomplete
                multiple
                freeSolo
                id="tags-outlined"
                options={artistsList}
                getOptionLabel={(option) => option}
                filterSelectedOptions
                renderInput={(params) => (
                    <TextField {...params} label="other band names" placeholder="" />
                )}
            />
        </>
    );
}
