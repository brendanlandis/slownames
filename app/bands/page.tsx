'use client';
import * as React from 'react';

async function getArtists() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/artists`);
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}

export default async function bands() {
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
                    <label htmlFor="band-form-bandname">band name</label>
                    <input
                        type="text"
                        id="band-form-bandname"
                        className="form-input"
                        placeholder="band name"
                    />
                </div>
                <h2>Are you in any of these other bands?</h2>
                <fieldset className="band-form-input">
                    <legend>Check all the bands you're in:</legend>

                    {artists.data.map((artist, index) => (
                        <div key={index}>
                            <input type="checkbox" id={'artist-' + artist.id} name={'artist-' + artist.id} />
                            <label htmlFor={'artist-' + artist.id}>{artist.attributes.name}</label>
                        </div>
                    ))}
                </fieldset>
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
