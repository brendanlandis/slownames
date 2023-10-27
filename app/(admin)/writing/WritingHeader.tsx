'use client';
import React, { useState } from 'react';
import ViewWritingTools from './ViewWritingTools';
import ViewSingleWritingTool from './ViewSingleWritingTool';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SelectedBandProvider } from '../api/SelectedBandContext';

const queryClient = new QueryClient();

export default function WritingHeader() {
    return (
        <SelectedBandProvider>
            <QueryClientProvider client={queryClient}>
                <div className="form-header">
                    <h1>Writing Tools</h1>
                </div>
                <h2>Pick a random writing tool</h2>
                <ViewSingleWritingTool />
                {/* <h2>View all writing tools</h2>
                <ViewWritingTools /> */}
                <h2>Pick a random free-writing topic</h2>
                <h2>Pick a random text fishing method</h2>
                <h2>Pick a random text manipulation method</h2>
                <h2>Random Oblique Strategy</h2>
                {/* <ReactQueryDevtools initialIsOpen /> */}
            </QueryClientProvider>
        </SelectedBandProvider>
    );
}
