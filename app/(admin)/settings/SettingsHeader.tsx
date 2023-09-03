'use client';
import React, { useState } from 'react';
import NewOrOld from '../sharedcomponents/NewOrOld';
import BandSelector from '../sharedcomponents/BandSelector';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SelectedBandProvider } from '../api/SelectedBandContext';
import SettingsForm from './SettingsForm';

const queryClient = new QueryClient();

export default function SettingsHeader(props) {
    return (
        <SelectedBandProvider>
            <QueryClientProvider client={queryClient}>
                <SettingsForm humanNum={props.humanNum} />
            </QueryClientProvider>
        </SelectedBandProvider>
    );
}
