'use client';
import * as React from 'react';
import InputText from '../components/InputText';
import InputCheckbox from '../components/InputCheckbox';
import ButtonSubmit from '../components/ButtonSubmit';

async function getArtists() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/artists`);
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}

export default async function bands() {
    const artists = await getArtists();

    return (
        <main id="yourband" className="smallcontainer">
            <form id="band-form">
                <h1>What's your band called?</h1>

                <div className="form-input-box">
                    <InputText id="band-form-bandname" label="band name" />
                </div>
                <h2>Plus, are you in any of these other bands?</h2>
                <fieldset className="form-input-box">
                    <legend>Check all the bands you're in:</legend>

                    {artists.data.map((artist, index) => (
                        <InputCheckbox
                            key={index}
                            id={'artist-' + artist.id}
                            label={artist.attributes.name}
                        />
                    ))}
                </fieldset>
            </form>

            <ButtonSubmit id="primaryartist-form-submit" label="that's sick" />
        </main>
    );
}
