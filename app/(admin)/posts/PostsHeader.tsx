'use client';
import React, { useState } from 'react';
import NewOrOld from '../sharedcomponents/NewOrOld';
import NewPost from './NewPost';
import ViewPosts from './ViewPosts';
import BandSelector from '../sharedcomponents/BandSelector';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function PostsHeader() {
    const [showNewPosts, setShowNewPosts] = useState(false);

    function toggleNewPosts() {
        setShowNewPosts(!showNewPosts);
    }

    return (
        <QueryClientProvider client={queryClient}>
            <div className="form-header">
                <h1>
                    Posts for
                    <span>
                        <BandSelector />
                    </span>
                </h1>
                <NewOrOld isChecked={showNewPosts} onToggle={toggleNewPosts} />
            </div>
            {showNewPosts ? (
                // show the grid of old posts
                <ViewPosts />
            ) : (
                // show the form to add a new post or edit an existing one
                <NewPost />
            )}
        </QueryClientProvider>
    );
}
