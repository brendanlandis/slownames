import * as React from 'react';
import { Metadata } from 'next';
import InputText from '../components/forms/InputText';
import ButtonSubmit from '../components/forms/ButtonSubmit';
import GetHumanName from './GetHumanName';
import MainBandDropdown from './MainBandDropdown';
import OtherBandsChecklist from './OtherBandsChecklist';

export const metadata: Metadata = {
    title: 'Settings',
};

export default function settings() {
    const humanNum = Math.floor(Math.random() * 99999) + 10000;

    return (
        <main id="settings">
            <div className="form-header">
                <h1>
                    Settings for Registered Human #{humanNum}
                    <span className="human-name">
                        <GetHumanName />
                    </span>
                </h1>
            </div>
            <form id="band-form">

                <div className="divider first">FIRST</div>
                <p className="explanation">Check all the bands you're in.</p>
                <OtherBandsChecklist />

                <div className="divider">THEN</div>
                <p className="explanation">
                    Add a new band if you don't see yours above.
                </p>
                <div className="new-secondary-band">
                    <div className="input-wrapper">
                        <InputText
                            id="band-form-new-secondary-band"
                            label="band name"
                            labeldisplay={false}
                        />
                    </div>
                    <div>
                        <ButtonSubmit
                            id="primaryartist-form-submit"
                            label="add band"
                        />
                    </div>
                </div>

                <div className="divider">FINALLY</div>
                <p className="explanation">Select your main band.</p>
                <label className="hidden" htmlFor="mainBand">
                    What's your main band?
                </label>
                <MainBandDropdown />
                <div className="submit-wrapper">
                    <ButtonSubmit
                        id="primaryartist-form-submit"
                        label="that's sick"
                    />
                </div>
            </form>
        </main>
    );
}
