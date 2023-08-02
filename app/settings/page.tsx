import * as React from 'react';
import InputText from '../components/forms/InputText';
import InputCheckbox from '../components/forms/InputCheckbox';
import ButtonSubmit from '../components/forms/ButtonSubmit';
import InputSelect from '../components/forms/InputSelect';

async function getArtists() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/artists`);
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}

export default async function settings() {
    const artists = await getArtists();
    return (
        <main id="settings">
            <h1>Settings</h1>
            <form id="band-form">
                <div className="form-header">
                    <h2>
                        <span>This is</span>
                        <span className="inbetween">
                            <InputSelect
                                id="nameOfUser"
                                label="Is this Calley or Brendan?"
                                options={['Calley', 'Brendan']}
                                labeldisplay={false}
                            />
                        </span>
                    </h2>
                </div>
                <div className="form-header">
                    <h2>
                        <span>My main band is still</span>
                        <span className="inbetween">
                            <label className="hidden" htmlFor="mainBand">
                                What is your main band?
                            </label>
                            <select defaultValue="0" id="mainBand">
                                {artists.data.map((artist, index) => (
                                    <option key={index} value={index}>
                                        {artist.attributes.name}
                                    </option>
                                ))}
                            </select>
                        </span>
                    </h2>
                </div>

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
