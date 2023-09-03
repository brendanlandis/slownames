import * as React from 'react';
import { Metadata } from 'next';
import SettingsHeader from './SettingsHeader';

export const metadata: Metadata = {
    title: 'Settings',
};

export default function settings() {
    const humanNum = Math.floor(Math.random() * 99999) + 10000;

    return (
        <main id="settings">
            <SettingsHeader humanNum={humanNum} />
        </main>
    );
}
