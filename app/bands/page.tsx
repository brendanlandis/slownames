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
        <main id="bands">
            <form id="band-form" className="tiny">
                <h1>What's your main band called?</h1>

                <div>
                    <InputText
                        id="band-form-bandname"
                        label="band name"
                        labeldisplay={false}
                    />
                </div>

                <h2>Plus, are you in any of these other bands?</h2>

                <fieldset>
                    <legend className="hidden">
                        Check all the bands you're in:
                    </legend>

                    {artists.data.map((artist, index) => (
                        <InputCheckbox
                            key={index}
                            id={'artist-' + artist.id}
                            label={artist.attributes.name}
                            labeldisplay={true}
                        />
                    ))}
                </fieldset>

                <h2>Or, any that aren't listed here?</h2>

                <div className="new-secondary-bands">
                    <div>
                        <InputText
                            id="band-form-new-secondary-band-1"
                            label="band name"
                            labeldisplay={false}
                        />
                    </div>
                    <div>
                        <InputText
                            id="band-form-new-secondary-band-2"
                            label="band name"
                            labeldisplay={false}
                        />
                    </div>
                    <div>
                        <InputText
                            id="band-form-new-secondary-band-3"
                            label="band name"
                            labeldisplay={false}
                        />
                    </div>
                </div>
            </form>
            <div className="submit-wrapper">
                <ButtonSubmit
                    id="primaryartist-form-submit"
                    label="that's sick"
                />
            </div>
        </main>
    );
}
