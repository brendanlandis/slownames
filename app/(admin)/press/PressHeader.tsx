'use client';
import React, { useState } from 'react';
import NewOrOld from '../sharedcomponents/NewOrOld';
import BandSelector from '../sharedcomponents/BandSelector';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SelectedBandProvider } from '../api/SelectedBandContext';
import ViewPress from './ViewPress';
import NewPress from './NewPress';

const queryClient = new QueryClient();

export default function PressHeader() {
    const [showNewPress, setShowNewPress] = useState(false);

    function toggleNewPress() {
        setShowNewPress(!showNewPress);
    }

    return (
        <SelectedBandProvider>
            <QueryClientProvider client={queryClient}>
                <div className="form-header">
                    <h1>
                        Press for
                        <span>
                            <BandSelector forPage="press" />
                        </span>
                    </h1>
                    <NewOrOld
                        isChecked={showNewPress}
                        onToggle={toggleNewPress}
                    />
                </div>
                {showNewPress ? (
                    // show the grid of old press
                    <ViewPress />
                ) : (
                    // show the form to add new press or edit existing press
                    <NewPress />
                )}
                {/* <ReactQueryDevtools initialIsOpen /> */}
            </QueryClientProvider>
        </SelectedBandProvider>
    );
}
