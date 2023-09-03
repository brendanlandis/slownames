'use client';
import InputText from '../sharedcomponents/forms/InputText';
import ButtonSubmit from '../sharedcomponents/forms/ButtonSubmit';
import GetHumanName from '../api/GetHumanName';
import { useState } from 'react';

import submitNewBand from '../api/SubmitNewBand';

export default function SettingsForm(props) {

    const [newBandName, setNewBandName] = useState('');
    
    const handleNewBandChange = (e) => {
        setNewBandName(e.target.value);
    };
    
    const handleNewBandSubmit = async (event) => {
        event.preventDefault();
        try {
            const responseData = await submitNewBand(newBandName);
            console.log(responseData);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <div className="form-header">
                <h1>
                    Settings for Registered Human #{props.humanNum}
                    <span className="human-name">
                        <GetHumanName />
                    </span>
                </h1>
            </div>
            <form id="settings-form">
                <div className="divider first">FIRST</div>
                <p className="explanation">Check all the bands you're in.</p>
                {/* <OtherBandsChecklist /> */}

                <div className="divider">THEN</div>
                <p className="explanation">
                    Add a new band if you don't see yours above.
                </p>
                <div className="new-secondary-band">
                    <div className="input-wrapper">
                        <label className="hidden" htmlFor="new-band-name">
                            "new band name"
                        </label>
                        <input
                            type="text"
                            id="new-band-name"
                            name="newbandname"
                            className="form-input"
                            placeholder="new band name"
                            value={newBandName}
                            onChange={handleNewBandChange}
                        />
                    </div>
                    <div>
                        <div className="new-band-submit-wrapper">
                            <button
                                id="new-band-submit"
                                type="button"
                                onClick={handleNewBandSubmit}
                            >
                                add band
                            </button>
                        </div>
                    </div>
                </div>

                <div className="divider">FINALLY</div>
                <p className="explanation">Select your main band.</p>
                <label className="hidden" htmlFor="mainBand">
                    What's your main band?
                </label>
                {/* <MainBandDropdown /> */}
                <div className="submit-wrapper">
                    <ButtonSubmit
                        id="primaryartist-form-submit"
                        label="that's sick"
                    />
                </div>
            </form>
        </>
    );
}
