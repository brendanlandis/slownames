import * as React from 'react';
import SettingsForm from './SettingsForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Settings',
};

export default async function settings() {

    return (
        <main id="settings">
            <div className="form-header">
                <h1>Settings</h1>
            </div>
            <SettingsForm />
        </main>
    );
}
