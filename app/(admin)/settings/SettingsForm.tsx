'use client';
import ButtonSubmit from '../sharedcomponents/forms/ButtonSubmit';
import GetUser from './GetUser';
import { useState } from 'react';
import SubmitNewBand from './SubmitNewBand';
import OtherBandsChecklist from './OtherBandsChecklist';

export default function SettingsForm(props) {
    const { data: user, isLoading, isError } = GetUser();
    const [newBandName, setNewBandName] = useState('');

    const handleNewBandChange = (e) => {
        setNewBandName(e.target.value);
    };

    const handleNewBandSubmit = async (event) => {
        event.preventDefault();
        try {
            const responseData = await SubmitNewBand(newBandName, user.id);
            console.log(responseData);
            setNewBandName('');
        } catch (error) {
            console.error(error);
        }
    };

    if (isLoading) {
        return (
            <div className="form-header">
                <h1></h1>
            </div>
        );
    }

    if (isError) {
        return (
            <div className="form-header">
                <h1>oh no</h1>
            </div>
        );
    }

    return (
        <>
            <div className="form-header">
                <h1>
                    Settings for Registered Human #{props.humanNum}
                    <span className="human-name">{user.username}</span>
                </h1>
            </div>
            <form id="settings-form">
                <div className="divider first">FIRST</div>
                <p className="explanation">Check all the bands you're in.</p>
                <OtherBandsChecklist userId={user.id} />

                <div className="divider">THEN</div>
                <p className="explanation">
                    Add a new band if you don't see yours above.
                </p>
                <div className="new-secondary-band">
                    <div className="input-wrapper">
                        <label className="hidden" htmlFor="new-band-name">
                            add new band
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
