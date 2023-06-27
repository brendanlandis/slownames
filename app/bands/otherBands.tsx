'use client';

import * as React from 'react';
import { TextField } from '@mui/material';
import { Autocomplete } from '@mui/material';

async function getArtists() {
    const res = await fetch('https://api.slownames.net/api/artists');
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
        <div>
            <Autocomplete
                multiple
                freeSolo
                id="tags-outlined"
                options={artistsList}
                getOptionLabel={(option) => option}
                filterSelectedOptions
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="type some shit here"
                        placeholder=""
                    />
                )}
            />
        </div>
    );
}
