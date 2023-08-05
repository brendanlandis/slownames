import * as React from 'react';
import SettingsForm from './SettingsForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Settings',
};

export default function settings() {

    return (
        <main id="settings">
            <SettingsForm />
        </main>
    );
}
