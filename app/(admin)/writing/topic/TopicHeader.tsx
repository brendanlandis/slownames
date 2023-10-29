'use client';
import React from 'react';
import ViewSingleWritingTopic from './ViewSingleWritingTopic';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SelectedBandProvider } from '../../api/SelectedBandContext';

const queryClient = new QueryClient();

export default function TopicHeader() {
    return (
        <SelectedBandProvider>
            <QueryClientProvider client={queryClient}>
                <ViewSingleWritingTopic />
                {/* <ReactQueryDevtools initialIsOpen /> */}
            </QueryClientProvider>
        </SelectedBandProvider>
    );
}
