'use client';
import * as React from 'react';
import InputText from '../components/forms/InputText';
import InputCheckbox from '../components/forms/InputCheckbox';
import ButtonSubmit from '../components/forms/ButtonSubmit';

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
        <main id="yourband">
            <form id="band-form">
                <h1>What's your main band called?</h1>

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
                <h2>Or, any that aren't listed here?</h2>

                <div className="form-input-box new-secondary-bands">
                    <div>
                        <InputText
                            id="band-form-new-secondary-band-1"
                            label="band name"
                        />
                    </div>
                    <div>
                        <InputText
                            id="band-form-new-secondary-band-2"
                            label="band name"
                        />
                    </div>
                    <div>
                        <InputText
                            id="band-form-new-secondary-band-3"
                            label="band name"
                        />
                    </div>
                </div>
            </form>

            <ButtonSubmit id="primaryartist-form-submit" label="that's sick" />
        </main>
    );
}
