import * as React from 'react';
import { Metadata } from 'next';
import GetHumanName from './GetHumanName';
import SettingsForm from './SettingsForm';

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
            <SettingsForm />
        </main>
    );
}
