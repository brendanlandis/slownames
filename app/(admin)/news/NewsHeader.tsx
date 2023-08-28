'use client';
import React, { useState } from 'react';
import NewOrOld from '../sharedcomponents/NewOrOld';
import NewsForm from './NewsForm';
import ViewOldNews from './ViewOldNews';
import WhichBand from '../sharedcomponents/WhichBand';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function NewsHeader() {
    const [showNewNews, setShowNewNews] = useState(false);

    function toggleNewNews() {
        setShowNewNews(!showNewNews);
    }

    return (
        <QueryClientProvider client={queryClient}>
            <div className="form-header">
                <h1>
                    News for
                    <span>
                        <WhichBand />
                    </span>
                </h1>
                <NewOrOld isChecked={showNewNews} onToggle={toggleNewNews} />
            </div>
            {showNewNews ? (
                // show the grid of old news items
                <ViewOldNews />
            ) : (
                // show the form to add a new news item
                // or edit an existing one
                <NewsForm />
            )}
        </QueryClientProvider>
    );
}
