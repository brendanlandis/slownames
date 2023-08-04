'use client';

import InputText from '../components/forms/InputText';
import InputCheckbox from '../components/forms/InputCheckbox';
import ButtonSubmit from '../components/forms/ButtonSubmit';
import { useState } from 'react';
import Cookies from 'js-cookie';


// async function getArtists() {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/artists`);
//     if (!res.ok) {
//         throw new Error('Failed to fetch data');
//     }
//     return res.json();
// }

export default function SettingsForm() {
    // const artists = await getArtists();
    const handleChangeUser = async (event) => {
        Cookies.set('name', 'calley', {
            sameSite: 'strict',
            expires: 365,
        });
    };
    return (
        <>
            <form id="band-form">
                <div className="form-header">
                    <h2>
                        <span>You're viewing this site as</span>
                        <span className="inbetween">
                            <label className="hidden" htmlFor="nameOfUser">
                                Is this Calley or Brendan?
                            </label>
                            <select
                                defaultValue="calley"
                                id="nameOfUser"
                                onChange={handleChangeUser}
                            >
                                <option value="calley">Calley</option>
                                <option value="brendan">Brendan</option>
                            </select>
                        </span>
                    </h2>
                </div>
                <div className="form-header">
                    <h2>
                        <span>Looks like your main band is</span>
                        <span className="inbetween">
                            <label className="hidden" htmlFor="mainBand">
                                What is your main band?
                            </label>
                            <select defaultValue="0" id="mainBand">
                                {/* {artists.data.map((artist, index) => (
                            <option key={index} value={index}>
                                {artist.attributes.name}
                            </option>
                        ))} */}
                            </select>
                        </span>
                    </h2>
                </div>

                <h2>Plus, you're in these other bands</h2>

                <fieldset>
                    <legend className="hidden">
                        Check all the bands you're in:
                    </legend>

                    {/* {artists.data.map((artist, index) => (
                <InputCheckbox
                    key={index}
                    id={'artist-' + artist.id}
                    label={artist.attributes.name}
                    labeldisplay={true}
                />
            ))} */}
                </fieldset>

                <h2>Do you need to add any new bands?</h2>

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
        </>
    );
}
