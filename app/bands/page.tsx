'use client';
import * as React from 'react';

async function getArtists() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/artists`);
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}

export default async function Bands() {
    const artists = await getArtists();

    const artistsList: string[] = [];

    artists.data.map((artist) => {
        let name = artist.attributes.name;
        artistsList.push(name);
    });
    return (
        <main id="yourband" className="container mx-auto smallcontainer">
            <form id="band-form">
                <h1>What's your band called?</h1>

                <div className="band-form-input">
                    {/* <TextField
                        id="outlined-basic"
                        label="band name"
                        variant="outlined"
                    /> */}
                </div>

                <h2>Are you in any other bands?</h2>

                <div className="band-form-input">
                    {/* <Autocomplete
                        multiple
                        freeSolo
                        id="tags-outlined"
                        options={artistsList}
                        getOptionLabel={(option) => option}
                        filterSelectedOptions
                        renderInput={(params) => (
                            <TextField {...params} label="other band names" placeholder="" />
                        )}
                    /> */}
                </div>
            </form>

            <div className="band-form-submit-wrapper">
                <button
                    id="primaryartist-form-submit"
                    type="submit"
                    value="submit"
                >
                    that's sick
                </button>
            </div>
        </main>
    );
}
