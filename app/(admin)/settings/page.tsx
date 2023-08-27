import * as React from 'react';
import { Metadata } from 'next';
import SettingsForm from './SettingsForm';

export const metadata: Metadata = {
    title: 'Settings',
};

export default function settings() {
    const humanNum = Math.floor(Math.random() * 99999) + 10000;

    return (
        <main id="settings">
            <SettingsForm humanNum={humanNum} />
        </main>
    );
}
